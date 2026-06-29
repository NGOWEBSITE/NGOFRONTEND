import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Reach out for partnerships, volunteer opportunities, or general inquiries."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Get in touch</h3>
          <p className="mt-4 text-slate-600">Email: hello@nurtureglobal.org</p>
          <p className="mt-2 text-slate-600">Phone: +255 712 345 678</p>
          <p className="mt-2 text-slate-600">Address: 14 Kijitonyama Road, Dar es Salaam</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <form className="space-y-4">
            <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Your name" />
            <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Your email" />
            <textarea className="min-h-32 w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="How can we help?" />
            <button className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
