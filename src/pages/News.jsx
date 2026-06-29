import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const stories = [
  {
    title: 'Community radio brings health messages closer to families',
    date: 'June 14, 2026',
    category: 'Health',
  },
  {
    title: 'Volunteers plant 5,000 trees in the dry season',
    date: 'May 28, 2026',
    category: 'Climate',
  },
  {
    title: 'New scholarship cohort begins digital literacy training',
    date: 'April 10, 2026',
    category: 'Education',
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
          <article key={story.title} className="surface-card p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="brand-pill">{story.category}</span>
              <span className="flex items-center gap-2 text-sm text-slate-500"><FiCalendar /> {story.date}</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">{story.title}</h3>
            <p className="mt-4 text-slate-600">Read the latest field update from our team and community partners.</p>
            <button type="button" className="card-link mt-6">Read story <FiArrowRight /></button>
          </article>
        ))}
      </div>
    </div>
  );
}
