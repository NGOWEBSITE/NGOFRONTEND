import SectionHeader from '../components/SectionHeader';

const programs = [
  {
    title: 'Education Support',
    description: 'Scholarships, school kits, and digital learning initiatives for marginalized learners.',
  },
  {
    title: 'Maternal Health',
    description: 'Community health outreach, maternal care education, and referral support.',
  },
  {
    title: 'Agriculture and Food Security',
    description: 'Training, seed support, and climate-smart farming for smallholder families.',
  },
];

export default function Programs() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Programs"
        title="Focused on lasting change"
        description="Our program portfolio combines direct service delivery with long-term community capacity building."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {programs.map((program) => (
          <div key={program.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
            <p className="mt-3 text-slate-600">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
