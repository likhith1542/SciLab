
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Clinical Pathology',
      desc: 'Comprehensive blood work, metabolic panels, hormonal assays, and routine fluid analysis with rapid turnaround times.',
      icon: 'hematology'
    },
    {
      title: 'Microbiology',
      desc: 'Advanced culture studies, antibiotic sensitivity testing, and infectious disease tracking utilizing automated systems.',
      icon: 'coronavirus'
    },
    {
      title: 'Molecular Diagnostics',
      desc: 'State-of-the-art PCR testing, genetic screening, and DNA sequencing for precise diagnosis of genetic conditions.',
      icon: 'genetics'
    },
    {
      title: 'Radiology & Imaging',
      desc: 'High-resolution digital X-rays, Ultrasound imaging, and MRI support services with integrated digital reporting.',
      icon: 'radiology'
    },
    {
      title: 'Clinical Trials',
      desc: 'Full-spectrum support for pharmaceutical research phases I-III, ensuring strict adherence to protocols and data integrity.',
      icon: 'clinical_notes'
    }
  ];

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">Comprehensive Diagnostic Solutions</h3>
            <p className="text-text-muted dark:text-gray-400 text-lg">Tailored for patients, physicians, and clinical researchers.</p>
          </div>
          <button className="hidden md:flex items-center gap-1 text-primary font-bold hover:underline">
            Explore Full Catalog <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-[#cfe3e7] dark:border-gray-700 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{svc.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">{svc.title}</h3>
              <p className="text-text-muted dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {svc.desc}
              </p>
              <span className="flex items-center text-primary text-sm font-bold mt-auto group-hover:translate-x-1 transition-transform">
                Learn More <span className="material-symbols-outlined text-sm ml-1">chevron_right</span>
              </span>
            </div>
          ))}

          {/* Special Empty-looking Card */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-dashed border-primary/40 p-6 flex flex-col items-center justify-center text-center hover:bg-primary/5 transition-colors cursor-pointer">
             <div className="size-16 rounded-full bg-background-light dark:bg-gray-800 flex items-center justify-center text-text-muted mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">add</span>
             </div>
             <h3 className="text-lg font-bold text-text-main dark:text-white">View More Services</h3>
             <p className="text-text-muted dark:text-gray-400 text-sm mt-2">See our full test directory</p>
          </div>
        </div>

        {/* Timeline Process */}
        <div className="mt-32">
           <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-text-main dark:text-white mb-4">From Sample to Insight</h2>
              <p className="text-text-muted dark:text-gray-400">Our streamlined process ensures accuracy and speed for every test.</p>
           </div>
           <div className="max-w-5xl mx-auto px-4 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                 {[
                   { step: '1. Sample Collection', icon: 'colorize', desc: 'Visit one of our centers or request a home collection kit.' },
                   { step: '2. Lab Analysis', icon: 'science', desc: 'Samples are processed using advanced automated technology.' },
                   { step: '3. Digital Results', icon: 'assignment_turned_in', desc: 'Securely access your report online within 24-48 hours.' }
                 ].map((item) => (
                    <div key={item.step} className="bg-white dark:bg-gray-900 p-6 flex flex-col items-center text-center rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                       <div className="size-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 shadow-lg ring-8 ring-white dark:ring-gray-900">
                          <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                       </div>
                       <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">{item.step}</h3>
                       <p className="text-sm text-text-muted dark:text-gray-400">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
