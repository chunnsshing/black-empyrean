import { Client } from '@notionhq/client';
import { cache } from 'react';

if (!process.env.NOTION_TOKEN) {
  throw new Error('Missing env var: NOTION_TOKEN — add it to .env.local');
}

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DB_ID = process.env.NOTION_DATABASE_ID || '67bc8960516e489a9f066cbf393a8d32';

// cache() deduplicates calls within a single server request.
// Both insights/layout.js and insights/[slug]/page.js call getInsights(),
// but Notion is only fetched once per request.
export const getInsights = cache(async () => {
  try {
    const res = await notion.databases.query({
      database_id: DB_ID,
      filter: { property: 'Status', select: { equals: 'Published' } },
      sorts: [{ property: 'Date', direction: 'descending' }],
    }).catch(() =>
      notion.databases.query({
        database_id: DB_ID,
        sorts: [{ timestamp: 'created_time', direction: 'descending' }],
      })
    );
    return res.results.map(mapPage);
  } catch (err) {
    console.error('Notion getInsights error:', err.message);
    return [];
  }
});

export async function getInsightBySlug(slug) {
  try {
    const all = await getInsights();
    const article = all.find(a => a.slug === slug);
    if (!article) return null;
    const blocks = await getPageBlocks(article.id);
    return { ...article, blocks };
  } catch (err) {
    console.error('Notion getInsightBySlug error:', err.message);
    return null;
  }
}

export function titleToSlug(title, pageId = '') {
  const base = title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  // Append 6-char page ID suffix to guarantee uniqueness across similar titles.
  const suffix = pageId.replace(/-/g, '').slice(-6);
  return suffix ? `${base}-${suffix}` : base;
}

function extractPlainText(richText) {
  if (!Array.isArray(richText)) return '';
  return richText.map(t => t.plain_text || '').join('');
}

function extractRichText(richText) {
  if (!Array.isArray(richText)) return '';
  return richText.map(t => {
    let text = (t.plain_text || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    if (t.annotations) {
      if (t.annotations.bold)          text = `<strong>${text}</strong>`;
      if (t.annotations.italic)        text = `<em>${text}</em>`;
      if (t.annotations.code)          text = `<code>${text}</code>`;
      if (t.annotations.strikethrough) text = `<s>${text}</s>`;
      if (t.annotations.underline)     text = `<u>${text}</u>`;
    }
    // Only allow http/https links — reject javascript:, data:, etc.
    if (t.href && /^https?:\/\//i.test(t.href)) {
      text = `<a href="${t.href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    }
    return text;
  }).join('');
}

async function getPageBlocks(pageId) {
  const blocks = [];
  let cursor;
  do {
    const res = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });
    blocks.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return blocks;
}

function mapPage(page) {
  const props = page.properties || {};

  const getTitle = () => {
    for (const key of ['Name', 'Title', 'title']) {
      const p = props[key];
      if (p?.title) return extractPlainText(p.title);
      if (p?.rich_text) return extractPlainText(p.rich_text);
    }
    return 'Untitled';
  };

  const getDate = () => {
    for (const key of ['Date', 'Published', 'PublishedAt', 'date']) {
      const p = props[key];
      if (p?.date?.start) return p.date.start;
    }
    return page.created_time?.split('T')[0] || new Date().toISOString().split('T')[0];
  };

  const getSelect = (keys) => {
    for (const key of keys) {
      const p = props[key];
      if (p?.select?.name) return p.select.name;
    }
    return null;
  };

  const getRichText = (keys) => {
    for (const key of keys) {
      const p = props[key];
      if (p?.rich_text?.length) return extractPlainText(p.rich_text);
    }
    return '';
  };

  const getNumber = (keys) => {
    for (const key of keys) {
      const p = props[key];
      if (p?.number != null) return p.number;
    }
    return 5;
  };

  const title = getTitle();
  const date = getDate();
  const month = new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();
  const cover = page.cover?.external?.url || page.cover?.file?.url || null;

  return {
    id: page.id,
    slug: titleToSlug(title, page.id),
    title,
    date,
    month,
    category: getSelect(['Category', 'Tag', 'Type']) || 'AI Trends',
    summary: getRichText(['Summary', 'Description', 'Excerpt', 'summary']),
    readTime: getNumber(['Read', 'ReadTime', 'ReadingTime']) || 5,
    cover,
  };
}

export function blocksToHtml(blocks) {
  const elements = [];
  let i = 0;
  while (i < blocks.length) {
    const block = blocks[i];
    const type = block.type;
    const content = block[type];

    if (type === 'paragraph') {
      const text = extractRichText(content?.rich_text);
      if (text) elements.push({ type: 'p', html: text });
      i++;
    } else if (type === 'heading_1') {
      elements.push({ type: 'h1', html: extractRichText(content?.rich_text) });
      i++;
    } else if (type === 'heading_2') {
      elements.push({ type: 'h2', html: extractRichText(content?.rich_text) });
      i++;
    } else if (type === 'heading_3') {
      elements.push({ type: 'h3', html: extractRichText(content?.rich_text) });
      i++;
    } else if (type === 'quote') {
      elements.push({ type: 'blockquote', html: extractRichText(content?.rich_text) });
      i++;
    } else if (type === 'bulleted_list_item') {
      const items = [];
      while (i < blocks.length && blocks[i].type === 'bulleted_list_item') {
        items.push(extractRichText(blocks[i].bulleted_list_item?.rich_text));
        i++;
      }
      elements.push({ type: 'ul', items });
    } else if (type === 'numbered_list_item') {
      const items = [];
      while (i < blocks.length && blocks[i].type === 'numbered_list_item') {
        items.push(extractRichText(blocks[i].numbered_list_item?.rich_text));
        i++;
      }
      elements.push({ type: 'ol', items });
    } else if (type === 'code') {
      elements.push({ type: 'code', html: extractPlainText(content?.rich_text), lang: content?.language });
      i++;
    } else if (type === 'image') {
      const url = content?.external?.url || content?.file?.url;
      const caption = extractPlainText(content?.caption);
      elements.push({ type: 'image', url, caption });
      i++;
    } else if (type === 'divider') {
      elements.push({ type: 'hr' });
      i++;
    } else if (type === 'callout') {
      elements.push({ type: 'callout', html: extractRichText(content?.rich_text), icon: content?.icon?.emoji });
      i++;
    } else {
      i++;
    }
  }
  return elements;
}
