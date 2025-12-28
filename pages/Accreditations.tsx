
import React from 'react';

const Accreditations: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero */}
      <section className="relative py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-lg">verified_user</span>
                <span>Trust & Integrity</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight">
                Committed to the Highest Standards of Scientific Integrity
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-xl">
                Our facility meets rigorous international benchmarks for safety, accuracy, and reliability, ensuring every result you receive is precise and trustworthy.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="bg-primary hover:bg-primary-dark text-slate-900 px-6 py-3 rounded-lg text-base font-bold shadow-md hover:shadow-lg flex items-center gap-2 transition-all">
                  View Certificates <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button className="bg-transparent border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg text-base font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-2">
                  Quality Report <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                 <img src="https://picsum.photos/seed/integrity/800/600" className="w-full h-full object-cover" alt="Scientist" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white dark:bg-[#1a2c30]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Accreditations</h2>
            <p className="text-gray-600 dark:text-gray-400">We maintain the highest level of certification to ensure our results are globally accepted and medically precise.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'ISO 15189:2012', icon: 'verified', desc: 'The gold standard for quality and competence in medical laboratories.' },
              { title: 'NABL Accredited', icon: 'biotech', desc: 'National Accreditation Board for Testing and Calibration Laboratories.' },
              { title: 'ICMR Approved', icon: 'science', desc: 'Approved by the Council of Medical Research for specialized testing.' }
            ].map((card) => (
              <div key={card.title} className="group bg-background-light dark:bg-surface-dark rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center gap-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="size-20 bg-primary/5 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-4xl text-primary">{card.icon}</span>
                </div>
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{card.desc}</p>
                <button className="text-primary text-sm font-bold mt-auto flex items-center gap-1 hover:underline">
                  View Certificate <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <h2 className="text-center text-2xl font-bold mb-10">Peer Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Sarah Jenkins', pos: 'Chief Medical Officer', quote: '"The consistency and accuracy of SciLab reporting have significantly improved our turnaround times. A partner we truly trust."' },
              { name: 'Dr. Rajesh Kumar', pos: 'Senior Pathologist', quote: '"Their adherence to ISO 15189 standards is evident in every report. For complex pathology, they are our first choice."' },
              { name: 'Elena Rodriguez', pos: 'Director of Research', quote: '"Reliable, fast, and transparent. The online verification system for patient reports adds a layer of trust few others offer."' }
            ].map((t) => (
              <div key={t.name} className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-primary/40 text-4xl mb-4">format_quote</span>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-200" />
                   <div>
                     <p className="text-sm font-bold">{t.name}</p>
                     <p className="text-xs text-gray-500">{t.pos}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accreditations;
