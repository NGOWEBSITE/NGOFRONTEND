import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart, FiBookOpen, FiSun, FiUsers } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const stats = [
  { value: '12K+', label: 'people reached' },
  { value: '38', label: 'active projects' },
  { value: '9', label: 'districts served' },
  { value: '96%', label: 'community satisfaction' },
];

const featuredPrograms = [
  {
    title: 'Education for Every Child',
    description: 'Scholarships, digital learning, and teacher support for underserved schools.',
    icon: FiBookOpen,
  },
  {
    title: 'Community Health',
    description: 'Mobile clinics, maternal care, and nutrition outreach for rural families.',
    icon: FiHeart,
  },
  {
    title: 'Climate Resilience',
    description: 'Agroforestry, water harvesting, and practical adaptation training.',
    icon: FiSun,
  },
];

const featuredProjects = [
  {
    title: 'Solar Learning Hubs',
    description: 'Bringing reliable power and connectivity to rural classrooms.',
  },
  {
    title: 'Women-led Farming Cooperative',
    description: 'Support for seed access, training, and market linkages.',
  },
  {
    title: 'Youth Skills Lab',
    description: 'Vocational and digital apprenticeships for young adults.',
  },
];

export default function Home() {
  return (
    <div>
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_40%),linear-gradient(135deg,_#f8fffb,_#ffffff)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
              Building resilient communities together
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Empowering lives through education, health, and opportunity.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Nurture Global is a nonprofit organization creating lasting change for children, mothers, youth, and smallholder families across underserved regions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Support Our Work <FiArrowRight />
              </Link>
              <Link to="/programs" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700">
                Explore Programs
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-[0_24px_80px_-24px_rgba(16,185,129,0.35)]">
            <div className="rounded-2xl bg-slate-900 p-8 text-white">
              <div className="flex items-center gap-3 text-emerald-400">
                <FiUsers size={22} />
                <span className="text-sm font-semibold uppercase tracking-[0.25em]">Community impact</span>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-semibold">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="Programs that change lives"
          description="Our initiatives are designed to build practical, measurable progress for communities facing persistent barriers."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredPrograms.map((program) => {
            const Icon = program.icon;
            return (
              <div key={program.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{program.title}</h3>
                <p className="mt-3 text-slate-600">{program.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured projects"
            title="Real projects, local impact"
            description="We partner with communities to turn ideas into sustainable development outcomes."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
