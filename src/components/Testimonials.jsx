import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'They felt like an extension of our team. From discovery to launch, everything was pixel-perfect and ahead of schedule.',
    name: 'Ava Thompson',
    role: 'VP Product, LumenAI',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
  {
    quote:
      'The ROI was immediate. Our conversion rate doubled after the redesign and performance improvements.',
    name: 'Marcus Lee',
    role: 'CEO, Nova Commerce',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop',
  },
  {
    quote:
      'Top-tier engineering and design. They ship fast, communicate clearly, and the quality is outstanding.',
    name: 'Sofia Ramirez',
    role: 'Head of Engineering, TerraWorks',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Clients love the results</h2>
        <p className="mt-2 text-slate-300">A few words from partners we have helped grow.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur transition hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <figcaption className="font-semibold text-white">{t.name}</figcaption>
                  <div className="text-sm text-slate-300">{t.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-slate-200">“{t.quote}”</blockquote>
              <div className="mt-4 flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
