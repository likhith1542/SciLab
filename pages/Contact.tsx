
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Contact Our Laboratory</h1>
          <p className="text-text-muted text-lg max-w-2xl">
            Advanced Diagnostics, Personalized Care. Reach out for inquiries, appointments, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col xl:flex-row">
               <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="flex items-center gap-2 mb-2 text-rose-500 font-bold uppercase tracking-wider text-xs">
                     <span className="material-symbols-outlined text-[18px]">emergency</span> Urgent
                  </div>
                  <h3 className="text-lg font-bold">Urgent Inquiries</h3>
                  <p className="text-sm text-text-muted">For urgent clinical results or after-hours emergencies, please call our 24/7 hotline.</p>
                  <button className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-300 border border-rose-100 dark:border-rose-800 text-sm font-bold w-fit">
                    <span className="material-symbols-outlined text-[18px]">call</span> +1 (555) 012-3456
                  </button>
               </div>
               <img src="https://picsum.photos/seed/emergency/400/400" className="w-full xl:w-48 object-cover h-48 xl:h-auto" alt="Support" />
            </div>

            <div className="flex flex-col gap-4">
               <h2 className="text-xl font-bold">Get in Touch</h2>
               <div className="grid gap-4">
                 {[
                   { icon: 'location_on', title: 'Visit Facility', desc: '123 Science Park Drive, Innovation City' },
                   { icon: 'phone_in_talk', title: 'Main Office', desc: 'Mon-Fri, 8am - 6pm' },
                   { icon: 'mail', title: 'General Support', desc: 'support@scilab-diagnostics.com' }
                 ].map((item) => (
                   <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-text-muted text-sm mt-1">{item.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft border border-slate-200 dark:border-slate-800 p-8 sm:p-10">
              <h2 className="text-2xl font-black mb-2">Request an Appointment</h2>
              <p className="text-text-muted mb-8">Complete the form and we'll confirm within 24 hours.</p>
              
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Patient Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-background-dark border-none focus:ring-2 focus:ring-primary" placeholder="Full name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Phone Number</label>
                    <input type="tel" className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-background-dark border-none focus:ring-2 focus:ring-primary" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Email Address</label>
                    <input type="email" className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-background-dark border-none focus:ring-2 focus:ring-primary" placeholder="email@example.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Preferred Date</label>
                    <input type="date" className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-background-dark border-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Reason for Visit</label>
                  <textarea className="w-full min-h-[120px] p-4 rounded-lg bg-slate-50 dark:bg-background-dark border-none focus:ring-2 focus:ring-primary resize-none" placeholder="Provide any details..."></textarea>
                </div>
                <label className="flex items-start gap-3 mt-2 cursor-pointer group">
                  <input type="checkbox" className="mt-1 rounded border-slate-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-text-muted group-hover:text-primary transition-colors">I consent to the processing of my health information in accordance with HIPAA regulations.</span>
                </label>
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-text-muted text-xs">
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                    Your data is secure.
                  </div>
                  <button type="button" className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary-dark text-slate-900 font-bold rounded-lg shadow-lg shadow-primary/20 transition-all">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
