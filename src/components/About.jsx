import React from 'react';
import { Award, Users, Trophy } from 'lucide-react';

const stats = [
  { label: 'Projects shipped', value: '160+' },
  { label: 'Average NPS', value: '72' },
  { label: 'Awards & honors', value: '24' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our story</h2>
            <p className="mt-4 text-slate-300">
              We’re a full‑stack product agency blending strategy, design, and engineering. From scrappy MVPs to enterprise platforms, we help teams move from idea to impact.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                  <div className="text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-xs text-slate-300">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4 text-slate-300">
              <span className="inline-flex items-center gap-2"><Users size={18} className="text-teal-300" /> 30+ experts</span>
              <span className="inline-flex items-center gap-2"><Award size={18} className="text-teal-300" /> Design leaders</span>
              <span className="inline-flex items-center gap-2"><Trophy size={18} className="text-teal-300" /> Global recognition</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                alt="Team at work"
                className="rounded-xl object-cover shadow-2xl transition duration-700 ease-out hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
