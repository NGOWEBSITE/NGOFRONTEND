export default function SectionHeader({ eyebrow, title, description, invert = false, center = false }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl`}>
      <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${invert ? 'text-emerald-300' : 'text-emerald-700'}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${invert ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      <p className={`mt-4 text-lg leading-8 ${invert ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
    </div>
  );
}
