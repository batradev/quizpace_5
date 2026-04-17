import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-milk pt-16 pb-10">
      <div className="container-wide">
        {/* Pre-footer CTA */}
        <div className="bg-ink text-white rounded-[40px] p-12 md:p-20 mb-20 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Start studying with less chaos</h2>
            <p className="text-xl opacity-60">Upload your first file and get a clear, personalized review plan in minutes.</p>
          </div>
          <a 
            href="#benefits" 
            className="bg-lime text-ink px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform whitespace-nowrap"
          >
            Learn more
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <span className="text-xl font-bold tracking-tighter uppercase block mb-2">Quizpace</span>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              AI-powered exam prep made simpler. Turn your study materials into results.
            </p>
            <p className="text-[10px] text-secondary opacity-60 leading-relaxed max-w-xs uppercase font-bold tracking-widest">
              Quizpace is operated by 9528-9468 Québec Inc.<br />
              2300 St Mathieu st, #409,<br />
              Montreal, QC, H3H 2J8
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">Product</h4>
            <ul className="space-y-4">
              <li><a href="/#how-it-works" className="text-sm font-medium hover:text-secondary transition-colors">How it works</a></li>
              <li><a href="/#benefits" className="text-sm font-medium hover:text-secondary transition-colors">Features</a></li>
              <li><a href="/#faq" className="text-sm font-medium hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm font-medium hover:text-secondary transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-sm font-medium hover:text-secondary transition-colors">Terms</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">Connect</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-sm font-medium hover:text-secondary transition-colors">Contact</Link></li>
              <li><a href="mailto:contact@quizpace.com" className="text-sm font-medium hover:text-secondary transition-colors">contact@quizpace.com</a></li>
            </ul>
          </div>
        </div>

        <div className="editorial-divider mb-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-secondary opacity-60">
          <span>© 2026 9528-9468 QUÉBEC INC. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
}
