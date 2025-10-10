import { PlaybookChapter } from '@/components/PlaybookChapter';
import { getPlaybookData } from '@/lib/playbook-data';

export default async function PlaybookPage() {
  const data = await getPlaybookData('latam-economics');
  if (!data) return null;

  return <PlaybookChapter data={data} />;
}
