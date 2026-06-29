import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Projects', path: '/projects' },
  { name: 'News', path: '/news' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'Donate', path: '/donate' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white">
            NG
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">Nurture Global</p>
            <p className="text-sm text-slate-500">Community Action Network</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-emerald-700 font-semibold'
                  : 'text-slate-600 transition hover:text-emerald-700'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/donate"
          className="hidden rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 md:inline-flex"
        >
          Donate Now
        </Link>

        <button className="rounded-full p-2 text-slate-700 md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? 'font-semibold text-emerald-700' : 'text-slate-600'
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/donate" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-emerald-600 px-4 py-2 text-center text-sm font-semibold text-white">
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
