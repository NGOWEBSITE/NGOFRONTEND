import SectionHeader from '../components/SectionHeader';

const amounts = [10, 25, 50, 100];

export default function Donate() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Donate"
        title="Your generosity creates lasting change"
        description="Every donation helps fund programs that deliver direct support to vulnerable communities."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Give securely</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {amounts.map((amount) => (
              <button key={amount} className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-700">
                ${amount}
              </button>
            ))}
          </div>
          <p className="mt-6 text-slate-600">Support our work with a one-time or recurring gift and receive a receipt for your contribution.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-emerald-50 p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Why donate?</h3>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Fund school and health programs</li>
            <li>• Expand community-led livelihoods</li>
            <li>• Help us respond quickly to crises</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
