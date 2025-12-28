
import React from 'react';

const Technology: React.FC = () => {
  const equipment = [
    {
      name: 'SpectraMax i3x',
      type: 'Analysis',
      ref: 'SM-2024-X',
      icon: 'biotech',
      desc: 'High-sensitivity detection for DNA/RNA quantification and protein analysis. Features spectral scanning and well-imaging capabilities.',
      image: 'https://picsum.photos/seed/tech1/500/300'
    },
    {
      name: 'Magnetom Vida 3T',
      type: 'Imaging',
      ref: 'MG-3T-01',
      icon: 'radiology',
      desc: 'Advanced MRI scanner with BioMatrix technology that adjusts to patient variability, ensuring consistent, high-quality imaging.',
      image: 'https://picsum.photos/seed/tech2/500/300'
    },
    {
      name: 'AutoLiquid Handler',
      type: 'Automation',
      ref: 'AL-800-R',
      icon: 'precision_manufacturing',
      desc: 'Robotic liquid handling platform for high-throughput screening and genomic sample preparation with micron-level precision.',
      image: 'https://picsum.photos/seed/tech3/500/300'
    },
    {
      name: 'NovaSeq 6000',
      type: 'Genomics',
      ref: 'NS-6000-G',
      icon: 'genetics',
      desc: 'Production-scale sequencer that unlocks the full spectrum of genetic variation, enabling deeper insights for complex diseases.',
      image: 'https://picsum.photos/seed/tech4/500/300'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-surface-dark py-20 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://picsum.photos/seed/lablab/1200/800" className="w-full h-full object-cover" alt="Lab" />
           <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/70 to-primary/20 mix-blend-multiply z-10"></div>
        </div>
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              State-of-the-Art Facility
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-200">Diagnostics Integration</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Experience the future of medical diagnostics with our ISO-certified infrastructure, committed to speed and innovation through automation.
            </p>
            <div className="flex gap-4">
              <button className="h-12 bg-primary px-6 rounded-lg font-bold text-slate-900 flex items-center gap-2 hover:bg-primary-dark hover:text-white transition-all shadow-glow">
                <span className="material-symbols-outlined">calendar_month</span> Book a Facility Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">Advanced Laboratory Infrastructure</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our facility utilizes the latest automation and imaging technology to ensure the highest standards of diagnostic accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {equipment.map((item) => (
            <div key={item.name} className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
                <div className="absolute top-3 left-3 z-10 bg-white/90 dark:bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-primary uppercase tracking-wider">{item.type}</div>
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} alt={item.name} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.name}</h3>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">{item.icon}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 flex-1">
                  {item.desc}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
                  <span className="text-xs font-mono text-slate-500">REF: {item.ref}</span>
                  <button className="text-sm font-bold text-primary hover:text-primary-dark flex items-center gap-1 group/link">
                    View Specs <span className="material-symbols-outlined text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Innovation */}
      <section className="bg-white dark:bg-[#15262a] py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                 <div className="inline-flex items-center rounded-lg bg-teal-50 dark:bg-teal-900/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Innovation Highlight</div>
                 <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">AI & Automation Integration</h2>
                 <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    We leverage machine learning algorithms and robotic process automation (RPA) to minimize human error and maximize throughput. Our proprietary AI models analyze patterns in diagnostic data to flag anomalies 40% faster than traditional methods.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <div className="flex flex-col gap-3 rounded-xl bg-background-light dark:bg-surface-dark p-5 shadow-sm border border-slate-100 dark:border-slate-700">
                       <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined">smart_toy</span></div>
                       <h3 className="font-bold text-slate-900 dark:text-white">Robotic Workflows</h3>
                       <p className="text-sm text-slate-500 dark:text-slate-400">24/7 autonomous sample processing with precision.</p>
                    </div>
                    <div className="flex flex-col gap-3 rounded-xl bg-background-light dark:bg-surface-dark p-5 shadow-sm border border-slate-100 dark:border-slate-700">
                       <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined">psychology</span></div>
                       <h3 className="font-bold text-slate-900 dark:text-white">Deep Learning</h3>
                       <p className="text-sm text-slate-500 dark:text-slate-400">Neural networks assist pathologists in identifying rare anomalies.</p>
                    </div>
                 </div>
              </div>
              <div className="flex-1 w-full">
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-surface-dark">
                    <img src="https://picsum.photos/seed/ai/800/600" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" alt="AI Lab" />
                    <div className="absolute bottom-6 left-6 z-20 text-white">
                       <p className="font-bold text-lg">Real-time Data Processing</p>
                       <p className="text-white/80 text-sm">Processing 1M+ data points per hour</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
