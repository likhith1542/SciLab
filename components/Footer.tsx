
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-2">
              <span className="material-symbols-outlined text-primary text-2xl">science</span>
              <span className="text-lg font-bold">SciLab</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              SciLab is a premier diagnostic center committed to providing accurate and timely results to improve patient outcomes.
            </p>
          </div>
          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Our Services</Link>
              <Link to="/technology" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Technology</Link>
              <Link to="/accreditations" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Accreditations</Link>
              <Link to="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">Contact</Link>
            </nav>
          </div>
          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Services</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-slate-500 dark:text-slate-400 text-sm">Blood Testing</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">Genetic Screening</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">Pathology</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">Molecular Biology</span>
            </nav>
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-lg mt-0.5">location_on</span>
                <span>123 Science Park Drive,<br />Innovation City, ST 90210</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">call</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">mail</span>
                <span>contact@scilab.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© 2024 SciLab Diagnostics. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Privacy Policy</a>
            <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
