
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1280px] px-4 md:px-10 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 flex-1 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mx-auto md:mx-0">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="text-xs font-bold uppercase tracking-wide">ISO 9001 Certified Laboratory</span>
              </div>
              <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Precision Diagnostics.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Trusted Results.</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                Advancing healthcare through accuracy, speed, and safety. Your dedicated partner in medical diagnostics, genetic research, and clinical trials.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Link to="/contact" className="bg-primary hover:bg-primary-dark text-slate-900 text-base font-bold h-12 px-8 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center">
                Book a Test
              </Link>
              <button className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-base font-bold h-12 px-8 rounded-lg transition-all flex items-center justify-center">
                View Reports
              </button>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start pt-2 opacity-80">
              <div className="flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                ISO Certified
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                CAP Accredited
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex-1 w-full">
            <div 
              className="w-full aspect-[4/3] rounded-2xl bg-slate-200 dark:bg-slate-800 bg-cover bg-center shadow-2xl relative overflow-hidden group" 
              style={{ backgroundImage: 'url("https://picsum.photos/seed/lab/800/600")' }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-white dark:bg-surface-dark border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: 'Accuracy Rate', value: '99.9%' },
              { label: 'Result Turnaround', value: '24 Hrs' },
              { label: 'Certified Experts', value: '50+' },
              { label: 'Years Experience', value: '20+' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 p-4 border-l-4 border-primary/30">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
                <p className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Trust Banner */}
      <section className="w-full bg-slate-50 dark:bg-background-dark/50 py-10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
           <p className="text-center text-sm font-semibold text-text-muted mb-8 uppercase tracking-wider">Trusted by Healthcare Leaders</p>
           <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><span className="material-symbols-outlined">shield_moon</span> MEDSAFE</div>
              <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><span className="material-symbols-outlined">health_and_safety</span> HEALTH CORP</div>
              <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><span className="material-symbols-outlined">biotech</span> BIO-LABS</div>
              <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><span className="material-symbols-outlined">medication_liquid</span> PHARMA+</div>
           </div>
        </div>
      </section>

      {/* Brief Services Preview */}
      <section className="w-full max-w-[1280px] px-4 md:px-10 py-20">
        <div className="flex flex-col gap-8 items-center text-center">
           <div className="max-w-2xl flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold">World-Class Facilities</h2>
              <p className="text-slate-600 dark:text-slate-400">Equipped with the latest technology to support complex research and diagnostics.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] w-full">
              <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group shadow-lg">
                 <img src="https://picsum.photos/seed/lab1/800/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Laboratory" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <span className="text-white font-bold text-lg">Main Laboratory</span>
                 </div>
              </div>
              <div className="relative rounded-xl overflow-hidden group shadow-md">
                 <img src="https://picsum.photos/seed/lab2/400/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Tubes" />
              </div>
              <div className="relative rounded-xl overflow-hidden group shadow-md">
                 <img src="https://picsum.photos/seed/lab3/400/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Monitor" />
              </div>
              <div className="col-span-2 relative rounded-xl overflow-hidden group shadow-lg">
                 <img src="https://picsum.photos/seed/lab4/800/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Imaging" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <span className="text-white font-bold text-lg">Imaging Center</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="w-full bg-slate-900 dark:bg-black text-white py-16 px-4 md:px-10 mt-10">
        <div className="max-w-[1280px] mx-auto rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 dark:from-surface-dark dark:to-black border border-slate-700 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex flex-col gap-4 relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to prioritize your health?</h2>
            <p className="text-slate-300 text-lg">Schedule your appointment online today. Fast, secure, and reliable diagnostics at your fingertips.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-slate-900 font-bold h-12 px-8 rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto flex items-center justify-center">
              Book Appointment
            </Link>
            <button className="bg-transparent border border-slate-500 hover:bg-white/10 text-white font-medium h-12 px-8 rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
