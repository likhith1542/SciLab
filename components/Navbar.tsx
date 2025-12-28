
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Technology', path: '/technology' },
    { name: 'Accreditations', path: '/accreditations' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-slate-900 dark:text-white group">
          <div className="flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>science</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight">SciLab</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button className="bg-primary hover:bg-primary-dark text-slate-900 text-sm font-bold h-10 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[20px]">account_circle</span>
              <span>Patient Portal</span>
            </button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-slate-600 dark:text-slate-300"
          >
            <span className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <span
            className="material-symbols-outlined text-slate-900 dark:text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-primary hover:bg-primary-dark text-slate-900 text-sm font-bold h-12 w-full rounded-lg transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">account_circle</span>
              <span>Patient Portal</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
