import HomeClient from '@/components/HomeClient';
import { getInsights } from '@/lib/notion';

export const metadata = {
  title: 'The Empyrean — AI-first Solutions for Southeast Asia',
  description:
    'Senior practitioners and emerging talent, deploying AI agents and enterprise systems that are fast, affordable, and built to last — across Southeast Asia.',
};

export default async function HomePage() {
  const insights = await getInsights();
  const latestInsight = insights[0] ?? null;
  return <HomeClient latestInsight={latestInsight} />;
}
