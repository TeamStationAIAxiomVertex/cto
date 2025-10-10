import PlaybookAuthor from '@/components/PlaybookAuthor';
import PlaybookContentRenderer from '@/components/PlaybookContentRenderer';
import { getPlaybookData } from '@/lib/playbook-data';

export default async function PlaybookPage() {
  const data = await getPlaybookData('bias-free-technical-hiring-axiom-cortex');
  if (!data) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <PlaybookContentRenderer slug="bias-free-technical-hiring-axiom-cortex" />
        </div>
        <div className="lg:w-1/4">
          <PlaybookAuthor author={data.author} />
        </div>
      </div>
    </div>
  );
}
