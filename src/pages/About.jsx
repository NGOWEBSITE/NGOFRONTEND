import SectionHeader from '../components/SectionHeader';

const values = ['Integrity', 'Accountability', 'Inclusion', 'Sustainability'];

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="About us"
        title="A mission rooted in service"
        description="We work with local leaders and partners to create practical solutions for education, health, food security, and empowerment."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Our story</h3>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Founded in 2012, Nurture Global began as a small volunteer-led initiative and has grown into a trusted development partner supporting communities across rural and peri-urban areas.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-emerald-50 p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Mission & Vision</h3>
          <p className="mt-4 text-slate-700">Mission: To improve the quality of life for vulnerable communities through inclusive, evidence-based development.</p>
          <p className="mt-3 text-slate-700">Vision: A future where all people can thrive with dignity, resilience, and equal opportunity.</p>
        </div>
      </div>
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-900">Core values</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value} className="rounded-2xl bg-slate-50 p-4 text-center font-semibold text-slate-700">
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
