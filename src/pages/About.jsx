import SectionHeader from '../components/SectionHeader';
import aboutImage from '../assets/worldngoday.jpg';

const values = ['Integrity', 'Accountability', 'Transparency', 'Innovation', 'Respect'];
const leadership = [
  { name: 'Grace Mwangi', role: 'Executive Director' },
  { name: 'Daniel Okello', role: 'Programs Lead' },
  { name: 'Mariam Said', role: 'Finance & Operations' },
];
const board = ['Dr. Helena Kato', 'Samuel Njoroge', 'Asha Mrema'];
const reports = ['Annual Report 2026', 'Safeguarding Policy', 'Strategic Plan 2026-2030'];

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeader
          eyebrow="About us"
          title="A mission rooted in service"
          description="We work with local leaders and partners to create practical solutions for education, health, food security, and empowerment."
        />
        <img src={aboutImage} alt="Community members gathered at a Nurture Global event" className="aspect-[16/10] w-full rounded-lg object-cover shadow-sm" />
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Our story</h3>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Founded in 2012, Nurture Global began as a small volunteer-led initiative and has grown into a trusted development partner supporting communities across rural and peri-urban areas.
          </p>
        </div>
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Mission & Vision</h3>
          <p className="mt-4 text-slate-700">Mission: To improve the quality of life for vulnerable communities through inclusive, evidence-based development.</p>
          <p className="mt-3 text-slate-700">Vision: A future where all people can thrive with dignity, resilience, and equal opportunity.</p>
        </div>
      </div>
      <div className="mt-10 rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-900">Core values</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <div key={value} className="rounded-lg bg-slate-50 p-4 text-center font-semibold text-slate-700">
              {value}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-950">Leadership team</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {leadership.map((member) => (
              <div key={member.name} className="rounded-lg bg-slate-50 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 font-semibold text-emerald-800">
                  {member.name.split(' ').map((part) => part[0]).join('')}
                </div>
                <p className="mt-4 font-semibold text-slate-950">{member.name}</p>
                <p className="text-sm text-slate-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-950">Board members</h3>
          <ul className="mt-6 space-y-3 text-slate-700">
            {board.map((member) => (
              <li key={member} className="rounded-lg bg-slate-50 px-4 py-3 font-medium">{member}</li>
            ))}
          </ul>
        </section>
      </div>
      <section className="mt-10 rounded-lg border border-emerald-100 bg-emerald-50 p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-950">Annual reports and policies</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reports.map((report) => (
            <div key={report} className="rounded-lg bg-white p-5 font-semibold text-slate-800 shadow-sm">{report}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
