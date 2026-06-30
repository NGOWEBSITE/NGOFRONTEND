import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const contactDetails = [
  { label: 'Email', value: 'info@umarbinngo.org', icon: FiMail },
  { label: 'Phone', value: '+256 708 484 169', icon: FiPhone },
  { label: 'Address', value: '14 Kijitonyama Road, Dar es Salaam', icon: FiMapPin },
  { label: 'Working hours', value: 'Monday to Friday, 8:30 AM - 5:00 PM', icon: FiClock },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Reach out for partnerships, volunteer opportunities, or general inquiries."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="surface-card p-8">
          <h3 className="text-2xl font-semibold text-slate-950">Get in touch</h3>
          <div className="mt-6 space-y-5">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{detail.label}</p>
                    <p className="mt-1 text-slate-700">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="surface-card p-8">
          <form className="grid gap-5">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-slate-700">Your name</label>
              <input id="name" name="name" className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email address</label>
              <input id="email" name="email" type="email" className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="info@umarbinngo.org" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
              <textarea id="message" name="message" className="mt-2 min-h-36 w-full rounded-lg border border-slate-300 px-4 py-3 transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" placeholder="How can we help?" />
            </div>
            <button type="submit" className="w-fit rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
              Send message
            </button>
          </form>
        </section>
      </div>
      <section className="surface-card mt-8">
        <div className="grid min-h-72 place-items-center bg-slate-900 p-8 text-center text-white">
          <div>
            <FiMapPin className="mx-auto text-emerald-300" size={34} />
            <h3 className="mt-4 text-2xl font-semibold">Dar es Salaam field office</h3>
            <p className="mt-2 text-slate-300">Google Map embed can be connected here when the production address is confirmed.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
