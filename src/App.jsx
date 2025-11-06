import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function Navbar() {
  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
        <a href="#" className="text-sm font-bold tracking-tight text-white">
          <span className="bg-gradient-to-br from-white to-teal-200 bg-clip-text text-transparent">Flames Studio</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
          Start a project
        </a>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
