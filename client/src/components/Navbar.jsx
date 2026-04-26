import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useScrollShrink } from '../hooks/useScrollShrink';

const NAV_LINKS = [
  { label: 'Milestones', type: 'route', to: '/milestones' },
  { label: 'Services', type: 'route', to: '/services' },
  { label: 'About Us', type: 'hash', href: '#about' },
  { label: 'Contact Us', type: 'hash', href: '#contact' },
];

export default function Navbar({ dark, toggleTheme }) {
  const shrunk = useScrollShrink(60);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = async (link, e) => {
    e.preventDefault();
    setOpen(false);
    if (link.type === 'route') {
      navigate(link.to);
    } else {
      // Hash link — navigate home first if not already there
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        className="glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        animate={{ paddingTop: shrunk ? '10px' : '18px', paddingBottom: shrunk ? '10px' : '18px' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={dark ? '/dark_mode_logo.png' : '/light_mode_logo.png'}
              alt="Theseus Group"
              className={`object-contain transition-all duration-300 ${shrunk ? 'h-7' : 'h-8'}`}
            />
            <span className="hidden sm:block text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
              Theseus Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.type === 'route' ? link.to : link.href}
                onClick={e => handleNavClick(link, e)}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={dark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); handleNavClick({ type: 'hash', href: '#contact' }, e); }}
              className="hidden md:inline-flex btn-primary text-sm"
            >
              Schedule a Call
            </a>

            {/* Hamburger */}
            <button
              id="hamburger-btn"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={open ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-zinc-900 shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800">
                <img
                  src={dark ? '/dark_mode_logo.png' : '/light_mode_logo.png'}
                  alt="Theseus Group"
                  className="h-7 w-auto object-contain"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col p-6 gap-1 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.type === 'route' ? link.to : link.href}
                    onClick={e => handleNavClick(link, e)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, type: 'spring', stiffness: 300, damping: 30 }}
                    className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="p-6 border-t border-zinc-100 dark:border-zinc-800">
                <a
                  href="#contact"
                  onClick={e => { handleNavClick({ type: 'hash', href: '#contact' }, e); }}
                  className="btn-primary w-full justify-center"
                >
                  Schedule a Call
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
