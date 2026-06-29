// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, LogOut, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Reusable storefront Navbar with premium side-drawer mobile navigation.
 */
const Navbar = ({
  brandName = 'Brand',
  brandAccent,
  navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'FAQ', path: '/faq' },
  ],
  showSearch = true,
  showCart = true,
  cartCount = 0,
  onCartClick,
  isAuthenticated = false,
  user,
  onLogout,
  dashboardPath = '/dashboard',
  loginPath = '/login',
  registerPath = '/register',
  onSearch,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Keyboard shortcut listener (Cmd/Ctrl + K to search)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLogoutClick = () => {
    onLogout?.();
    setMobileMenuOpen(false);
    navigate('/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch?.(searchValue.trim());
    }
  };

  const accent = brandAccent ?? brandName.charAt(0);
  const restOfBrand = brandAccent ? brandName : brandName.slice(1);

  // Stagger configurations for mobile menu links
  const menuContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 25 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'
      }`}
      style={{ minHeight: 'var(--navbar-height)' }}
      role="banner"
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight flex items-center gap-1.5 focus-visible:outline-none"
          style={{ fontFamily: 'var(--font-heading)' }}
          aria-label={`${brandName} Home`}
        >
          <span style={{ color: 'var(--color-gold)' }}>{accent}</span>
          <span style={{ color: 'var(--color-text)' }}>{restOfBrand}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-sm font-semibold tracking-wide transition-colors duration-200 py-1 hover:text-[var(--color-gold)]"
                style={{
                  color: isActive ? 'var(--color-gold)' : 'var(--color-text-muted)',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: 'var(--color-gold)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          {showSearch && (
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="absolute right-9 flex items-center"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Search... (Press ⌘K)"
                      className="form-input py-1.5 text-xs pr-8"
                    />
                    <kbd className="absolute right-2.5 text-[10px] font-mono font-bold text-gray-500 pointer-events-none select-none">
                      ⌘K
                    </kbd>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-[rgba(var(--color-gold-hsl),0.08)] transition-colors"
                style={{ color: searchOpen ? 'var(--color-gold)' : 'var(--color-text-muted)' }}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </form>
          )}

          {/* Cart */}
          {showCart && (
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-[rgba(var(--color-gold-hsl),0.08)] transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
              aria-label="Open cart"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span
                  className="absolute top-0 right-0 text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full text-[var(--color-navy)]"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* Auth System (Desktop) */}
          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-2">
              <Link
                to={dashboardPath}
                className="p-2 rounded-full hover:bg-[rgba(var(--color-gold-hsl),0.08)] transition-colors"
                style={{ color: 'var(--color-text-muted)' }}
                title="Dashboard"
              >
                <User size={18} />
              </Link>
              <button
                onClick={handleLogoutClick}
                className="p-2 rounded-full hover:bg-[rgba(239,68,68,0.08)] hover:text-[var(--color-error)] transition-colors"
                style={{ color: 'var(--color-text-muted)' }}
                title="Sign Out"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link to={loginPath} className="hidden md:inline-flex btn-outline btn-sm">
              Sign In
            </Link>
          )}

          {/* Mobile Menu Toggle (Premium CSS/SVG Hamburger) */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-[rgba(var(--color-gold-hsl),0.08)] transition-colors relative z-[60]"
            style={{ color: mobileMenuOpen ? 'var(--color-gold)' : 'var(--color-text)' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5 relative">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-5 h-0.5 rounded-full"
                style={{ backgroundColor: 'currentColor' }}
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                className="w-5 h-0.5 rounded-full"
                style={{ backgroundColor: 'currentColor' }}
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-5 h-0.5 rounded-full"
                style={{ backgroundColor: 'currentColor' }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Premium Right-Side Slide-out with backdrop blur) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 md:hidden"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="fixed top-0 right-0 h-full w-full max-w-[300px] z-50 shadow-2xl flex flex-col border-l md:hidden"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              {/* Drawer Top Header Area */}
              <div className="p-6 flex justify-between items-center border-b" style={{ borderColor: 'var(--color-border)' }}>
                <span className="font-extrabold text-lg tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span style={{ color: 'var(--color-gold)' }}>{accent}</span>
                  <span style={{ color: 'var(--color-text)' }}>{restOfBrand}</span>
                </span>
                {/* Spacer to push close button alignment */}
                <div className="w-8 h-8" />
              </div>

              {/* Navigation Links List */}
              <motion.nav
                variants={menuContainerVariants}
                initial="hidden"
                animate="show"
                className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6"
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div key={link.name} variants={menuItemVariants}>
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-bold tracking-wide flex items-center transition-colors duration-200"
                        style={{
                          color: isActive ? 'var(--color-gold)' : 'var(--color-text-muted)',
                        }}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Profile Card / Auth Section at the bottom */}
              <div className="p-6 border-t mt-auto" style={{ borderColor: 'var(--color-border)', backgroundColor: 'rgba(var(--color-bg-hsl), 0.3)' }}>
                {isAuthenticated ? (
                  <div className="space-y-4">
                    <Link
                      to={dashboardPath}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[rgba(var(--color-gold-hsl),0.05)] transition-colors"
                    >
                      {user?.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full border border-[var(--color-gold)]"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center font-bold text-sm text-[var(--color-navy)]">
                          {user?.name?.charAt(0).toUpperCase() || 'U'}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold truncate" style={{ color: 'var(--color-text)' }}>
                          {user?.name || 'Account'}
                        </p>
                        <p className="text-xs truncate" style={{ color: 'var(--color-text-muted)' }}>
                          {user?.email || 'Dashboard'}
                        </p>
                      </div>
                    </Link>

                    <button
                      onClick={handleLogoutClick}
                      className="btn-destructive btn-sm w-full py-2.5 rounded-lg flex items-center justify-center gap-2"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link
                      to={loginPath}
                      onClick={() => setMobileMenuOpen(false)}
                      className="btn-primary btn-md w-full text-center py-2.5"
                    >
                      Sign In
                    </Link>
                    <Link
                      to={registerPath}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-center text-xs font-semibold hover:text-[var(--color-gold)] transition-colors py-1"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      Create Account
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;