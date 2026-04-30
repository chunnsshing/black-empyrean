import { getInsights } from '@/lib/notion';
import InsightsSidebar from '@/components/insights/InsightsSidebar';

export const revalidate = 3600;

export default async function InsightsLayout({ children }) {
  const articles = await getInsights();
  return (
    <div className="insights-layout">
      <InsightsSidebar articles={articles} />
      <main className="insights-main">
        <div className="inner">{children}</div>
      </main>
    </div>
  );
}
