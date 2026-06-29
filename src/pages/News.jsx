import SectionHeader from '../components/SectionHeader';

const stories = [
  {
    title: 'Community radio brings health messages closer to families',
    date: 'June 14, 2026',
  },
  {
    title: 'Volunteers plant 5,000 trees in the dry season',
    date: 'May 28, 2026',
  },
  {
    title: 'New scholarship cohort begins digital literacy training',
    date: 'April 10, 2026',
  },
];

export default function News() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="News & events"
        title="Stories from the field"
        description="Updates, events, and announcements from our programs and partners."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {stories.map((story) => (
          <div key={story.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-emerald-600">{story.date}</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">{story.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
