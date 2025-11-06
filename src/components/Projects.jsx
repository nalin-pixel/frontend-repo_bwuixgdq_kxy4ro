import React from 'react';
import { Code, Globe, Smartphone, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Nova Commerce',
    description:
      'A headless e‑commerce platform with real-time inventory, blazing-fast storefront, and AI-assisted merchandising.',
    tags: ['Next.js', 'Stripe', 'GraphQL'],
    icon: <Globe className="text-teal-400" size={20} />,
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pulse Health',
    description:
      'HIPAA-compliant telemedicine app with secure video, remote vitals, and clinician dashboards.',
    tags: ['React Native', 'WebRTC', 'AWS'],
    icon: <Smartphone className="text-teal-400" size={20} />,
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'DataForge',
    description:
      'Self-serve analytics workbench with streaming ETL, query acceleration, and pixel-perfect reporting.',
    tags: ['Python', 'FastAPI', 'ClickHouse'],
    icon: <Code className="text-teal-400" size={20} />,
    image:
      'https://images.unsplash.com/photo-1551281044-8af2b9103f4e?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured projects</h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Real products shipped for startups and enterprises across the globe.
            </p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/5 sm:inline-block">
            Work with us
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="mb-3 inline-flex items-center gap-2 text-sm text-slate-200">
                  {p.icon}
                  <span className="font-semibold">{p.title}</span>
                </div>
                <p className="text-slate-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-teal-400/30 bg-teal-400/10 px-2 py-1 text-xs text-teal-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-teal-300">
                  <span className="text-sm font-semibold">Case study</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
