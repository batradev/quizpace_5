import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, MapPin, Building2 } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-bg-milk selection:bg-lime selection:text-ink">
      <Header />
      <main className="container-wide py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <p className="text-xl text-secondary leading-relaxed">
                Have questions about Quizpace or need support? We're here to help you optimize your study workflow.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-divider/5">
                    <Mail size={24} className="text-violet" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">Email</h3>
                    <a href="mailto:contact@quizpace.com" className="text-xl font-medium hover:opacity-70 transition-opacity">
                      contact@quizpace.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-divider/5">
                    <MapPin size={24} className="text-violet" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">Mailing Address</h3>
                    <p className="text-xl font-medium leading-tight">
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
                    <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">Legal Entity</h3>
                    <p className="text-xl font-medium">
                      9528-9468 Québec Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form hidden as requested */}
            <div className="hidden md:block bg-white/30 p-8 md:p-12 rounded-[32px] border border-divider/5 border-dashed flex items-center justify-center">
              <p className="text-secondary text-sm font-medium opacity-40">Contact form is currently disabled.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
