import MondayClient from '@/components/MondayClient';

export const metadata = {
  title: 'Monday — Products · The Empyrean',
  description:
    'Monday is an AI-powered weekly executive briefing. It connects to your ERP, CRM, and ops data overnight and delivers a structured, decision-ready summary to your inbox every Monday morning.',
};

export default function MondayPage() {
  return <MondayClient />;
}
