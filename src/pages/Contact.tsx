import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, MapPin, Building2 } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-bg-milk selection:bg-lime selection:text-ink">
      <Header />
      <main className="container-wide py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12 tracking-tight text-left">Contact Us</h1>
          
          <div className="space-y-8 md:space-y-12 bg-white/50 p-6 md:p-12 mt-8 rounded-[32px] border border-divider/10 shadow-sm">
            <p className="text-base md:text-xl text-secondary leading-relaxed">
              Have questions about Quizpace or need support? We're here to help you optimize your study workflow.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-divider/5">
                  <Mail size={24} className="text-violet" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-1">Email</h3>
                  <a href="mailto:contact@quizpace.com" className="text-lg md:text-xl font-medium hover:opacity-70 transition-opacity">
                    contact@quizpace.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-divider/5">
                  <MapPin size={24} className="text-violet" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-1">Mailing Address</h3>
                  <p className="text-lg md:text-xl font-medium leading-tight">
                    2300 St Mathieu st, #409<br />
                    Montreal, QC, H3H 2J8
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-divider/5">
                  <Building2 size={24} className="text-violet" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-1">Legal Entity</h3>
                  <p className="text-lg md:text-xl font-medium">
                    9528-9468 Québec Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
