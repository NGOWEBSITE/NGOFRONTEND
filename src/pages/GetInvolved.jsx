import { FiBriefcase, FiShare2, FiUpload, FiUsers } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const opportunities = [
  {
    title: 'Volunteer',
    description: 'Share your skills and time with communities that need practical support.',
    icon: FiUsers,
  },
  {
    title: 'Careers',
    description: 'Explore current openings for mission-driven professionals and interns.',
    icon: FiBriefcase,
  },
  {
    title: 'Partners',
    description: 'Collaborate with us to expand reach, resources, and impact.',
    icon: FiShare2,
  },
];

const vacancies = ['Finance Officer', 'Project Coordinator', 'Driver', 'Field Intern'];

export default function GetInvolved() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Get involved"
        title="Join our movement"
        description="There are many ways to support our work, from volunteering to partnering with us."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {opportunities.map((opportunity) => {
          const Icon = opportunity.icon;
          return (
            <div key={opportunity.title} className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">{opportunity.title}</h3>
              <p className="mt-3 text-slate-600">{opportunity.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-950">Volunteer application</h3>
          <form className="mt-6 grid gap-5 sm:grid-cols-2">
            <input className="rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="Full name" />
            <input type="email" className="rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="Email address" />
            <input className="rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="Skills" />
            <input className="rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="Availability" />
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-slate-300 px-4 py-3 text-slate-600 sm:col-span-2">
              <FiUpload /> Upload CV
              <input type="file" className="sr-only" />
            </label>
            <button type="submit" className="w-fit rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">Submit application</button>
          </form>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-950">Careers and internships</h3>
          <div className="mt-6 space-y-3">
            {vacancies.map((vacancy) => (
              <div key={vacancy} className="flex items-center justify-between gap-4 rounded-lg bg-slate-50 px-4 py-3">
                <span className="font-semibold text-slate-800">{vacancy}</span>
                <button type="button" className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-700">Apply</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8 rounded-lg border border-emerald-100 bg-emerald-50 p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-950">Partner with us</h3>
        <form className="mt-6 grid gap-5 md:grid-cols-3">
          <input className="rounded-lg border border-emerald-200 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="Organization" />
          <input className="rounded-lg border border-emerald-200 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="Contact person" />
          <input type="email" className="rounded-lg border border-emerald-200 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="Email address" />
          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-emerald-300 bg-white px-4 py-3 text-slate-600 md:col-span-2">
            <FiUpload /> Upload proposal
            <input type="file" className="sr-only" />
          </label>
          <button type="submit" className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">Submit proposal</button>
        </form>
      </section>
    </div>
  );
}
