import SectionHeader from '../components/SectionHeader';

export default function GetInvolved() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Get involved"
        title="Join our movement"
        description="There are many ways to support our work, from volunteering to partnering with us."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Volunteer</h3>
          <p className="mt-3 text-slate-600">Share your skills and time with communities that need practical support.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Careers</h3>
          <p className="mt-3 text-slate-600">Explore current openings for mission-driven professionals and interns.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Partners</h3>
          <p className="mt-3 text-slate-600">Collaborate with us to expand reach, resources, and impact.</p>
        </div>
      </div>
    </div>
  );
}
