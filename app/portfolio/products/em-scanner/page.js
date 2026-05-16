import EmScannerClient from '@/components/EmScannerClient';

export const metadata = {
  title: 'EM Scanner — Portfolio · The Empyrean',
  description:
    'EM Scanner uses AI to read handwritten documents and convert them into clean, structured Excel data. No manual re-entry. No errors. No delay.',
};

export default function EmScannerPage() {
  return <EmScannerClient />;
}
