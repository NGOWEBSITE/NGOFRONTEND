import SectionHeader from '../components/SectionHeader';

const projects = [
  {
    title: 'Bright Futures School Initiative',
    status: 'Active',
    summary: 'Improving access to quality education in remote districts.',
  },
  {
    title: 'Clean Water for All',
    status: 'Completed',
    summary: 'Installed water points and improved sanitation in rural villages.',
  },
  {
    title: 'Green Livelihoods',
    status: 'Active',
    summary: 'Supporting women-led enterprises and environmentally friendly income generation.',
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Projects"
        title="Progress across communities"
        description="Each project is designed with measurable goals, local ownership, and long-term sustainability in mind."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">{project.status}</div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-3 text-slate-600">{project.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
