import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="bg-gradient-to-br from-white to-teal-200 bg-clip-text text-2xl font-extrabold text-transparent">
              Flames Studio
            </h3>
            <p className="mt-3 max-w-sm text-slate-300">
              We partner with ambitious teams to ship world‑class software. Strategy, design, engineering — all under one roof.
            </p>
          </div>
          <div>
            <h4 className="text-white">Services</h4>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>Product Strategy</li>
              <li>UX/UI Design</li>
              <li>Web & Mobile Apps</li>
              <li>AI & Data Platforms</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white">Contact</h4>
            <p className="mt-3 text-slate-300">hello@flames.studio</p>
            <div className="mt-4 flex items-center gap-3 text-slate-200">
              <a href="#" aria-label="Github" className="rounded-full border border-white/10 p-2 hover:bg-white/10">
                <Github size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/10 p-2 hover:bg-white/10">
                <Linkedin size={18} />
              </a>
              <a href="mailto:hello@flames.studio" aria-label="Email" className="rounded-full border border-white/10 p-2 hover:bg-white/10">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Flames Studio. All rights reserved.</p>
          <div className="text-sm">Built with love, coffee, and clean code.</div>
        </div>
      </div>
    </footer>
  );
}
