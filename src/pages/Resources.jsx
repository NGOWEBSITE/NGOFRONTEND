import { FiDownload, FiFileText } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const resources = [
  { title: 'Annual Report 2026', type: 'Annual Report', detail: 'Program achievements, financial overview, and partner highlights.' },
  { title: 'Strategic Plan 2026-2030', type: 'Strategy', detail: 'Our roadmap for sustainable community development.' },
  { title: 'Safeguarding Policy', type: 'Policy', detail: 'Standards for protecting children and vulnerable adults.' },
  { title: 'Community Health Brief', type: 'Research', detail: 'Lessons from maternal health outreach and referrals.' },
  { title: 'Quarterly Newsletter', type: 'Newsletter', detail: 'Field stories, events, and upcoming opportunities.' },
  { title: 'Financial Summary', type: 'Financial Report', detail: 'A concise overview of responsible resource use.' },
];

export default function Resources() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Resources"
        title="Reports, policies, and learning materials"
        description="Download public documents that explain our work, standards, strategy, and impact."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.title} className="surface-card p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <FiFileText size={21} />
              </div>
              <span className="brand-pill">{resource.type}</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">{resource.title}</h3>
            <p className="mt-3 text-slate-600">{resource.detail}</p>
            <button type="button" className="card-link mt-6">
              <FiDownload /> Download
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
