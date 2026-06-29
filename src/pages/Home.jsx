import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiBookOpen, FiHeart, FiMessageCircle, FiSun, FiUsers } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import heroImage from '../assets/togetherness.jpg';
import programImage from '../assets/upliftthechild.jpg';

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
    description: 'Reliable power and connectivity for rural classrooms.',
  },
  {
    title: 'Women-led Farming Cooperative',
    description: 'Seed access, training, and market linkages for smallholder families.',
  },
  {
    title: 'Youth Skills Lab',
    description: 'Vocational and digital apprenticeships for young adults.',
  },
];

const latestNews = [
  { title: 'Community radio brings health messages closer to families', date: 'June 14, 2026' },
  { title: 'Volunteers plant 5,000 trees in the dry season', date: 'May 28, 2026' },
  { title: 'Annual impact report released for partners', date: 'April 30, 2026' },
];

const testimonials = [
  {
    quote: 'The training helped me start my own business and support my family with confidence.',
    name: 'Amina Joseph',
    role: 'Livelihoods participant',
  },
  {
    quote: 'Our school now has the materials and mentoring support learners needed most.',
    name: 'Peter Lema',
    role: 'Community teacher',
  },
];

const partners = ['UN', 'UNICEF', 'USAID', 'Local Government', 'Community NGOs'];

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <img src={heroImage} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/35" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <p className="inline-flex rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-sm font-semibold text-emerald-200">
              Building resilient communities together
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Empowering lives through education, health, and opportunity.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Nurture Global partners with local leaders to create lasting change for children, mothers, youth, and smallholder families.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/donate" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400">
                Support Our Work <FiArrowRight />
              </Link>
              <Link to="/get-involved" className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
                Become a Volunteer
              </Link>
              <Link to="/programs" className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="What we do"
            title="Programs that change lives"
            description="Our initiatives combine direct services with practical capacity building for communities facing persistent barriers."
          />
          <img src={programImage} alt="Children participating in a community education program" className="mt-8 aspect-[4/3] w-full rounded-lg object-cover shadow-sm" />
        </div>
        <div className="grid gap-5">
          {featuredPrograms.map((program) => {
            const Icon = program.icon;
            return (
              <div key={program.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{program.title}</h3>
                    <p className="mt-2 text-slate-600">{program.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="News & events"
            title="Latest updates from the field"
            description="Follow recent announcements, community activities, and project milestones."
          />
          <Link to="/news" className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700">
            Read all news <FiArrowRight />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {latestNews.map((story) => (
            <article key={story.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">{story.date}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{story.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              invert
              eyebrow="Featured projects"
              title="Real projects, local impact"
              description="We partner with communities to turn practical ideas into sustainable development outcomes."
            />
            <Link to="/projects" className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 px-4 py-2 font-semibold text-white transition hover:bg-white hover:text-slate-950">
              View all projects <FiArrowRight />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.title} className="rounded-lg border border-white/10 bg-white/10 p-6">
                <FiUsers className="text-emerald-300" size={24} />
                <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            center
            eyebrow="Success stories"
            title="Community voices guide the work"
            description="The strongest measure of impact is what changes for families, schools, and local leaders."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {testimonials.map((story) => (
              <figure key={story.name} className="rounded-lg border border-slate-200 bg-slate-50 p-8">
                <FiMessageCircle className="text-emerald-700" size={26} />
                <blockquote className="mt-5 text-xl font-medium leading-8 text-slate-900">"{story.quote}"</blockquote>
                <figcaption className="mt-5">
                  <p className="font-semibold text-slate-950">{story.name}</p>
                  <p className="text-sm text-slate-500">{story.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <FiAward className="text-emerald-700" size={26} />
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Trusted by local and global partners</h2>
                <p className="mt-1 text-slate-600">Collaboration helps us extend reach and accountability.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {partners.map((partner) => (
                <div key={partner} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
