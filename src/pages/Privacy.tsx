import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-bg-milk selection:bg-lime selection:text-ink">
      <Header />
      <main className="container-wide py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Privacy Policy</h1>
          <div className="prose prose-lg prose-ink max-w-none space-y-8 text-secondary leading-relaxed">
            <p className="text-sm font-bold uppercase tracking-widest text-ink opacity-60">Last Updated: April 14, 2026</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">1. Introduction</h2>
              <p>
                Quizpace ("we," "our," or "us"), operated by <strong>9528-9468 Québec Inc.</strong>, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you create an account, upload study materials (PDFs, notes, images), and communicate with us. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (such as email address)</li>
                <li>Study materials and content uploaded to the platform</li>
                <li>Usage data and preferences</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Generate AI-powered flashcards and study plans</li>
                <li>Communicate with you about your account and updates</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">4. Data Storage and Security</h2>
              <p>
                Your data is stored securely. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">5. Your Rights (Quebec Law)</h2>
              <p>
                In accordance with Quebec's <em>Act respecting the protection of personal information in the private sector</em>, you have the right to access, rectify, and withdraw your consent regarding your personal information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="font-medium text-ink">
                9528-9468 Québec Inc.<br />
                2300 St Mathieu st, #409<br />
                Montreal, QC, H3H 2J8<br />
                Email: <a href="mailto:contact@quizpace.com" className="underline">contact@quizpace.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
