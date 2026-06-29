import SectionHeader from '../components/SectionHeader';
import { FiArrowRight, FiBookOpen, FiHeart, FiSun, FiTrendingUp, FiUsers } from 'react-icons/fi';

const programs = [
  {
    title: 'Education Support',
    description: 'Scholarships, school kits, and digital learning initiatives for marginalized learners.',
    focus: 'Objectives: improve retention, literacy, and safe learning spaces.',
    icon: FiBookOpen,
  },
  {
    title: 'Maternal Health',
    description: 'Community health outreach, maternal care education, and referral support.',
    focus: 'Activities: mobile clinics, referrals, nutrition education.',
    icon: FiHeart,
  },
  {
    title: 'Agriculture and Food Security',
    description: 'Training, seed support, and climate-smart farming for smallholder families.',
    focus: 'Beneficiaries: smallholder farmers and women-led cooperatives.',
    icon: FiTrendingUp,
  },
  {
    title: 'Climate Change',
    description: 'Tree planting, water harvesting, and resilience planning with local leaders.',
    focus: 'Activities: adaptation training, conservation, and school eco-clubs.',
    icon: FiSun,
  },
  {
    title: 'Youth Development',
    description: 'Digital literacy, apprenticeships, mentorship, and employability support.',
    focus: 'Objectives: expand skills pathways for young people.',
    icon: FiUsers,
  },
  {
    title: 'Gender Equality',
    description: 'Leadership, protection, and livelihoods support for women and girls.',
    focus: 'Beneficiaries: women, girls, caregivers, and community groups.',
    icon: FiHeart,
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
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <div key={program.title} className="surface-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">{program.title}</h3>
              <p className="mt-3 text-slate-600">{program.description}</p>
              <p className="mt-5 rounded-lg bg-slate-50 p-4 text-sm font-medium text-slate-700">{program.focus}</p>
              <button type="button" className="card-link mt-6">View program <FiArrowRight /></button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
