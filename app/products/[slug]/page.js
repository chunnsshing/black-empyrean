import ProductDetailClient from '@/components/ProductDetailClient';

export async function generateMetadata({ params }) {
  const name = params.slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return {
    title: `${name} — Products · The Empyrean`,
    description: `Learn more about ${name}, a deployable software product from The Empyrean.`,
  };
}

export default function ProductDetailPage({ params }) {
  const name = params.slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return <ProductDetailClient name={name} slug={params.slug} />;
}
