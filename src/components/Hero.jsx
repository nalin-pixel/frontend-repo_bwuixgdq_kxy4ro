import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100 backdrop-blur">
          <Rocket size={14} className="text-teal-300" />
          <span>Building bold digital products</span>
        </div>
        <h1 className="mt-6 bg-gradient-to-br from-white via-teal-100 to-teal-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          We craft delightful software
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
          A modern software agency helping startups and enterprises imagine, design, and ship exceptional experiences across web, mobile, and cloud.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-teal-500/30 transition hover:translate-y-[-1px] hover:bg-teal-400"
          >
            View Projects
            <ArrowRight className="transition group-hover:translate-x-0.5" size={18} />
          </a>
          <a
            href="#contact"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
