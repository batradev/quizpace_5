import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Progress from '../components/Progress';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-milk selection:bg-lime selection:text-ink overflow-hidden">
      <Header />
      <main>
        <Hero />
        <div className="container-wide">
          <div className="editorial-divider" />
        </div>
        <Benefits />
        <div className="container-wide">
          <div className="editorial-divider" />
        </div>
        <HowItWorks />
        <Progress />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
