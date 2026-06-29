import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-xl font-semibold text-white">Nurture Global</h3>
          <p className="mt-3 max-w-sm text-sm leading-7">
            Working with communities to improve education, health, livelihoods, and climate resilience.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-emerald-400">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-emerald-400">Programs</Link></li>
            <li><Link to="/projects" className="hover:text-emerald-400">Projects</Link></li>
            <li><Link to="/news" className="hover:text-emerald-400">News & Events</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/resources" className="hover:text-emerald-400">Resources</Link></li>
            <li><Link to="/gallery" className="hover:text-emerald-400">Gallery</Link></li>
            <li><Link to="/get-involved" className="hover:text-emerald-400">Get Involved</Link></li>
            <li><Link to="/donate" className="hover:text-emerald-400">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-2"><FiMail /> hello@nurtureglobal.org</li>
            <li className="flex items-center gap-2"><FiPhone /> +255 712 345 678</li>
            <li className="flex items-center gap-2"><FiFacebook /> /nurtureglobal</li>
            <li className="flex items-center gap-2"><FiInstagram /> @nurtureglobal</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
