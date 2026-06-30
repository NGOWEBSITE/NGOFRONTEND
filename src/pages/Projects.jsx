import { FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import projectImage from '../assets/ngoimage.jpg';

const projects = [
  {
    title: 'Bright Futures School Initiative',
    status: 'Active',
    summary: 'Improving access to quality education in remote districts.',
    location: 'Gulu',
    duration: '2024-2026',
    budget: '$500,000',
    partner: 'Local Government',
  },
  {
    title: 'Clean Water for All',
    status: 'Completed',
    summary: 'Installed water points and improved sanitation in rural villages.',
    location: 'Mwanza',
    duration: '2023-2025',
    budget: '$280,000',
    partner: 'Community NGOs',
  },
  {
    title: 'Green Livelihoods',
    status: 'Active',
    summary: 'Supporting women-led enterprises and environmentally friendly income generation.',
    location: 'Arusha',
    duration: '2025-2027',
    budget: '$350,000',
    partner: 'USAID',
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <SectionHeader
          eyebrow="Projects"
          title="Progress across communities"
          description="Each project is designed with measurable goals, local ownership, and long-term sustainability in mind."
        />
        <img src={projectImage} alt="UMAR BIN NGOGlobal field project work" className="aspect-[16/9] w-full rounded-lg object-cover shadow-sm" />
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="surface-card p-8">
            <div className={`inline-flex rounded-lg px-3 py-1 text-sm font-semibold ${project.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>{project.status}</div>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">{project.title}</h3>
            <p className="mt-3 text-slate-600">{project.summary}</p>
            <dl className="mt-6 grid gap-3 text-sm">
              <div className="flex justify-between gap-4 border-t border-slate-100 pt-3">
                <dt className="font-semibold text-slate-500">Location</dt>
                <dd className="text-slate-800">{project.location}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-slate-100 pt-3">
                <dt className="font-semibold text-slate-500">Duration</dt>
                <dd className="text-slate-800">{project.duration}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-slate-100 pt-3">
                <dt className="font-semibold text-slate-500">Budget</dt>
                <dd className="text-slate-800">{project.budget}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-slate-100 pt-3">
                <dt className="font-semibold text-slate-500">Partner</dt>
                <dd className="text-slate-800">{project.partner}</dd>
              </div>
            </dl>
            <button type="button" className="card-link mt-6">Read more <FiArrowRight /></button>
          </div>
        ))}
      </div>
    </div>
  );
}
