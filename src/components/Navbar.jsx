import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Projects', path: '/projects' },
  { name: 'News', path: '/news' },
  { name: 'Resources', path: '/resources' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-base font-semibold text-white">
            <img src="ngologo.png" alt="" />
          </div>
          <div>
            <p className="text-base font-semibold text-slate-950">Nurture Global</p>
            <p className="hidden text-sm text-slate-500 sm:block">Community Action Network</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700'
                  : 'rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/donate"
          className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 sm:inline-flex"
        >
          Donate Now
        </Link>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-lg bg-emerald-50 px-3 py-2 font-semibold text-emerald-700'
                    : 'rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100'
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/donate" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white">
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
