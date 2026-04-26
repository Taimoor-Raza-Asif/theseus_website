import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const NAV_LINKS = [
  { label: 'Milestones', to: '/milestones' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  const { dark } = useTheme();

  const handleHashClick = (href, e) => {
    e.preventDefault();
    // Navigate to home first if not there, then scroll
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Column 1: Navigation — LEFT aligned */}
          <div className="text-left">
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 font-medium"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={e => handleHashClick(link.href, e)}
                      className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 font-medium"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Supported By — LEFT aligned */}
          <div className="text-left">
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-5">Supported By</p>
            <div className="flex flex-col gap-4">
              {/* AWS */}
              <div className="flex items-center gap-3">
                <img
                  src="/aws_logo.png"
                  alt="AWS Activate"
                  className="h-7 w-auto object-contain"
                  style={{ filter: dark ? 'brightness(1.1)' : 'none' }}
                />
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">AWS Activate</span>
              </div>
              {/* Microsoft for Startups */}
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 flex-shrink-0 flex items-center justify-center rounded bg-[#00a4ef]">
                  <span className="text-white font-black text-xs">M</span>
                </div>
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Microsoft for Startups</span>
              </div>
              {/* NVIDIA */}
              <div className="flex items-center gap-3">
                <img
                  src="/nvidia_logo.png"
                  alt="NVIDIA Inception"
                  className="h-7 w-auto object-contain"
                  style={{ filter: dark ? 'brightness(1.2) invert(0)' : 'none' }}
                />
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">NVIDIA Inception</span>
              </div>
            </div>
          </div>

          {/* Column 3: Brand — LEFT aligned */}
          <div className="text-left">
            {/* TG Logo */}
            <div className="mb-4">
              <img
                src={dark ? '/dark_mode_logo.png' : '/light_mode_logo.png'}
                alt="Theseus Group"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-3">
              Theseus Group LLC
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              © {new Date().getFullYear()} Theseus Group LLC.
              <br />All rights reserved.
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2 leading-relaxed">
              Advancing humanity through AI,<br />automation, and software.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
