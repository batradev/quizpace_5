import React from 'react';
import { motion } from 'motion/react';

export default function Progress() {
  return (
    <section className="container-wide py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
        {/* Left Column: Readiness */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Track your readiness</h2>
            <p className="text-xl text-secondary leading-relaxed">
              See more than just time spent studying. Measure how close you are to your goal with a simple readiness indicator tied to your flashcards and exam timeline.
            </p>
          </div>
          
          <div className="flex flex-col items-start gap-6">
            <div className="relative w-64 h-64 rounded-full shadow-sm flex items-center justify-center bg-white">
              <svg viewBox="0 0 256 256" className="absolute inset-0 w-full h-full -rotate-90">
                {/* Background Track */}
                <circle 
                  cx="128" 
                  cy="128" 
                  r="116" 
                  fill="none" 
                  stroke="#f8f9fa" 
                  strokeWidth="12" 
                />
                {/* Progress Arc */}
                <circle 
                  cx="128" 
                  cy="128" 
                  r="116" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="12" 
                  strokeDasharray="728.8" 
                  strokeDashoffset="276.9" 
                  strokeLinecap="round"
                  className="text-violet" 
                />
              </svg>
              <div className="text-center relative z-10">
                <span className="text-6xl font-bold block">62%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary opacity-60">Course Mastery</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full max-w-[240px]">
              <div className="flex justify-between items-center py-2 border-b border-ink/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-violet">Today's goal</span>
                <span className="text-xs font-bold text-violet">12 / 30 cards</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-ink/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary opacity-60">Total deck</span>
                <span className="text-xs font-bold">240 cards</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary opacity-60">Time left</span>
                <span className="text-xs font-bold">18 days to exam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Spaced Repetition */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Spaced repetition vs. chaotic rereading</h2>
            <p className="text-xl text-secondary leading-relaxed">
              The study plan is built around spaced repetition principles, helping you spend less time rereading everything and more time reviewing what actually matters.
            </p>
          </div>

          <div className="space-y-6 bg-white p-10 rounded-[32px] border border-ink/10">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold uppercase tracking-tighter">Rereading everything</span>
                <span className="text-xs text-secondary">High effort, low retention</span>
              </div>
              <div className="h-4 w-full bg-bg-milk rounded-full overflow-hidden">
                <div className="h-full w-full bg-divider opacity-20" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold uppercase tracking-tighter">Ordinary flashcards</span>
                <span className="text-xs text-secondary">Medium effort</span>
              </div>
              <div className="h-4 w-full bg-bg-milk rounded-full overflow-hidden">
                <div className="h-full w-[60%] bg-divider opacity-40" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold uppercase tracking-tighter text-violet">Quizpace AI</span>
                <span className="text-xs text-violet font-bold">Optimized effort</span>
              </div>
              <div className="h-4 w-full bg-bg-milk rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '35%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-violet" 
                />
              </div>
            </div>
            
            <p className="text-xs text-secondary pt-4 opacity-60 italic">
              * Designed to help reduce wasted study time through adaptive planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
