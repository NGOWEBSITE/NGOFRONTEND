import SectionHeader from '../components/SectionHeader';
import ngoday from '../assets/ngoday.jpg';
import ngoimage from '../assets/ngoimage.jpg';
import togetherness from '../assets/togetherness.jpg';
import upliftthechild from '../assets/upliftthechild.jpg';
import worldngoday from '../assets/worldngoday.jpg';

const galleryItems = [
  { title: 'Community Day', category: 'Events', image: ngoday },
  { title: 'Education Outreach', category: 'Projects', image: upliftthechild },
  { title: 'Partner Gathering', category: 'Community', image: togetherness },
  { title: 'Field Program Visit', category: 'Projects', image: ngoimage },
  { title: 'World NGO Day', category: 'Events', image: worldngoday },
];

export default function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Gallery"
        title="Moments from our work"
        description="A visual record of community activities, field projects, events, and partner collaboration."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <article key={item.title} className={`${index === 0 ? 'lg:col-span-2' : ''} overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm`}>
            <img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700">{item.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
