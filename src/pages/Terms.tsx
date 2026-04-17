import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-bg-milk selection:bg-lime selection:text-ink">
      <Header />
      <main className="container-wide py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Terms of Use</h1>
          <div className="prose prose-lg prose-ink max-w-none space-y-8 text-secondary leading-relaxed">
            <p className="text-sm font-bold uppercase tracking-widest text-ink opacity-60">Last Updated: April 14, 2026</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">1. Agreement to Terms</h2>
              <p>
                By accessing or using Quizpace, operated by <strong>9528-9468 Québec Inc.</strong>, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">2. Use of Service</h2>
              <p>
                Quizpace provides AI-powered study tools. You are responsible for the content you upload and must ensure you have the right to use and process such materials.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">3. User Accounts</h2>
              <p>
                You must provide accurate information when creating an account. You are responsible for maintaining the security of your account and for all activities that occur under your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">4. Intellectual Property</h2>
              <p>
                The Quizpace application, including its original content, features, and functionality, are owned by 9528-9468 Québec Inc. and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">5. Limitation of Liability</h2>
              <p>
                In no event shall 9528-9468 Québec Inc. be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">6. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Province of Quebec and the federal laws of Canada applicable therein.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink">7. Contact</h2>
              <p>
                For any questions regarding these Terms, please contact us at <a href="mailto:contact@quizpace.com" className="underline text-ink">contact@quizpace.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
