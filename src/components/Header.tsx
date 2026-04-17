import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Brain } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-bg-milk sticky top-0 z-50">
      <div className="container-wide py-4 flex items-center justify-between">
        {/* Left: Logo & Name */}
        <div className="flex-1 flex items-center gap-1.5">
          <div className="text-ink">
            {/* <Brain size={20} strokeWidth={2.5} /> */}
            <img src="/logo_1.png" alt="Quizpace Logo" className="h-6 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <Link to="/" className="text-base font-bold tracking-tight text-ink-soft">
            Quizpace
          </Link>
        </div>

        {/* Right: Links */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <a href="/#how-it-works" className="hidden md:flex items-center gap-0.5 text-sm font-medium text-ink hover:opacity-60 transition-opacity">
            How it works
          </a>
          <a href="/#faq" className="hidden sm:flex items-center gap-0.5 text-sm font-medium text-ink hover:opacity-60 transition-opacity">
            FAQ
          </a>
          <Link to="/contact" className="flex items-center gap-0.5 text-sm font-medium text-ink hover:opacity-60 transition-opacity">
            Contact
          </Link>
        </div>
      </div>
      <div className="container-wide">
        <div className="editorial-divider" />
      </div>
    </header>
  );
}
