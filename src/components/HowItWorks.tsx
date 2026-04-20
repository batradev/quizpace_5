import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Edit3, Target, Play } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: "Upload your material",
    description: "Add a PDF, image, or plain text. The AI analyzes the content and generates relevant flashcards based on the material.",
    bullets: ["Supports PDF, PNG, JPG, and more"],
    icon: <Upload size={40} />,
    mockup: (
      <div className="w-full h-full bg-white rounded-2xl border border-divider/20 flex flex-col overflow-hidden shadow-sm relative">
        {/* Window Top Bar */}
        <div className="h-6 bg-secondary/5 border-b border-divider/10 flex items-center px-4 gap-1.5 shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-divider/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-divider/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-divider/20" />
          <div className="ml-2 text-[8px] font-bold uppercase tracking-widest opacity-20">App Preview</div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 relative overflow-hidden">
          {/* Drop Zone */}
          <div className="w-24 h-24 rounded-full bg-bg-milk flex items-center justify-center border-2 border-dashed border-divider/30 relative">
            <Upload className="text-secondary opacity-20" />
            
            {/* Progress Bar (appears after drop) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                times: [0, 0.45, 0.8, 0.9],
                repeatDelay: 1
              }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-bg-milk rounded-full overflow-hidden"
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: ["0%", "0%", "100%", "100%"] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  times: [0, 0.45, 0.75, 1],
                  repeatDelay: 1
                }}
                className="h-full bg-violet"
              />
            </motion.div>
          </div>

          <p className="text-[9px] font-black opacity-20 uppercase tracking-[0.2em] mt-8">
            App functionality preview
          </p>
          
          {/* Animated File Icon */}
          <motion.div
            initial={{ x: 100, y: 100, opacity: 0, scale: 0.8 }}
            animate={{ 
              x: [100, 100, 0, 0], 
              y: [100, 100, 0, 0], 
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 1.1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              times: [0, 0.1, 0.45, 0.5],
              repeatDelay: 1
            }}
            className="absolute z-10 w-12 h-14 bg-white border-2 border-divider shadow-xl rounded-lg flex items-center justify-center pointer-events-none"
          >
            <div className="text-[8px] font-black text-secondary leading-none">PDF</div>
          </motion.div>

          {/* Result Card (appears after progress) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 0, 1, 1, 0], 
              opacity: [0, 0, 1, 1, 0],
              y: [0, 0, 0, -10, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              times: [0, 0.75, 0.8, 0.95, 1],
              repeatDelay: 1
            }}
            className="absolute z-20 w-40 h-24 bg-white border border-ink/10 shadow-2xl rounded-xl p-4 flex flex-col gap-2 pointer-events-none"
          >
            <div className="h-2 w-1/2 bg-violet/20 rounded-full" />
            <div className="h-2 w-full bg-ink/5 rounded-full" />
            <div className="h-2 w-3/4 bg-ink/5 rounded-full" />
            <div className="mt-auto flex justify-between">
              <div className="w-4 h-4 rounded bg-lime" />
              <div className="w-8 h-2 bg-ink/10 rounded-full" />
            </div>
          </motion.div>
          
          {/* Animated Cursor */}
          <motion.div 
            initial={{ x: 120, y: 120 }}
            animate={{ 
              x: [120, 120, 20, 20, 120], 
              y: [120, 120, 20, 20, 120],
              scale: [1, 1, 0.9, 1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              times: [0, 0.1, 0.45, 0.55, 0.8],
              repeatDelay: 1
            }}
            className="absolute pointer-events-none z-30"
          >
            <div className="w-5 h-5 text-ink drop-shadow-md">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2l12 11.2-5.8.8 3.3 6.5-2.2 1.1-3.3-6.6L7 19V2z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: '02',
    title: "Review and edit",
    description: "Check AI-generated cards or remove low-value ones. Tailor your study set to your specific exam needs.",
    bullets: ["See source references for every card", "Compare with original material highlighting"],
    icon: <Edit3 size={40} />,
    mockup: (
      <div className="w-full h-full bg-white rounded-2xl border border-divider/20 p-6 space-y-4">
        <div className="flex justify-between items-center border-b border-divider/10 pb-2">
          <span className="text-xs font-bold uppercase tracking-tighter">Reviewing Deck</span>
          <span className="text-[10px] bg-lime px-2 py-0.5 rounded-full font-bold">12 Cards</span>
        </div>
        {[1, 2, 3].map(i => (
          <div key={i} className="p-4 bg-ink/5 rounded-xl flex justify-between items-center">
            <div className="space-y-1">
              <div className="h-2 w-24 bg-ink/20 rounded-full" />
              <div className="h-2 w-16 bg-ink/10 rounded-full" />
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded bg-white border border-divider/20" />
              <div className="w-6 h-6 rounded bg-white border border-divider/20" />
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: '03',
    title: "Set your goal",
    description: "Choose your exam date. The system builds a study plan that fits your timeline perfectly.",
    bullets: ["Finish new material days before the exam"],
    icon: <Target size={40} />,
    mockup: (
      <div className="w-full h-full bg-white rounded-2xl border border-divider/20 p-8 flex flex-col justify-center items-center">
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold uppercase tracking-widest">June 2026</span>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded bg-bg-milk" />
              <div className="w-4 h-4 rounded bg-bg-milk" />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 mb-2">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
              <div key={day} className="text-[8px] font-bold text-secondary opacity-40 text-center uppercase">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const isExamDay = day === 17;
              const isStudyDay = day < 17;
              return (
                <div 
                  key={i} 
                  className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold transition-all
                    ${isExamDay ? 'bg-violet text-white ring-4 ring-violet/20' : 
                      isStudyDay ? 'hatch-pattern border border-violet/20 text-ink opacity-100' : 
                      'bg-bg-milk text-secondary opacity-40'}
                  `}
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="pt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet" />
              <span className="text-[10px] font-bold text-violet uppercase tracking-tight">Exam Date</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded hatch-pattern border border-violet/30" />
              <span className="text-[10px] font-bold text-secondary uppercase tracking-tight">Study Days</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '04',
    title: "Start learning",
    description: "Each day, get a clear set of cards to study. The system decides what to introduce and what to review.",
    bullets: ["Adapts if you miss days", "Readiness percentage and daily workload"],
    icon: <Play size={40} />,
    mockup: (
      <div className="w-full h-full bg-white rounded-2xl border border-divider/20 p-8 flex flex-col items-center justify-center gap-6">
        <div className="relative w-32 h-32 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 128 128" className="absolute inset-0 w-full h-full -rotate-90">
            {/* Background Track */}
            <circle 
              cx="64" 
              cy="64" 
              r="56" 
              fill="none" 
              stroke="#f8f9fa" 
              strokeWidth="8" 
            />
            {/* Progress Arc */}
            <circle 
              cx="64" 
              cy="64" 
              r="56" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="8" 
              strokeDasharray="351.8" 
              strokeDashoffset="133.7" 
              strokeLinecap="round"
              className="text-violet" 
            />
          </svg>
          <span className="text-2xl font-bold relative z-10">62%</span>
        </div>
        <div className="text-center space-y-1">
          <p className="text-sm font-bold">Today: 16 cards to master</p>
          <p className="text-xs text-secondary">Readiness is increasing</p>
        </div>
        <button className="bg-ink text-white px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
          Start Session
        </button>
      </div>
    )
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="container-wide pt-20 md:pt-32 pb-10 md:pb-16 bg-bg-milk">
      <div className="mb-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">How it works</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-20 min-h-[500px]">
        <div className="relative aspect-square bg-blush rounded-[32px] p-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              {steps[activeStep].mockup}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                {steps[activeStep].title}
              </h3>
              <p className="text-xl text-secondary leading-relaxed mb-8">
                {steps[activeStep].description}
              </p>
              <ul className="space-y-4">
                {steps[activeStep].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-secondary">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-divider" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-ink">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(index)}
            className={`group py-8 px-4 text-left transition-all relative ${activeStep === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
          >
            {activeStep === index && (
              <motion.div 
                layoutId="active-step-indicator"
                className="absolute top-0 left-0 w-full h-1 bg-ink" 
              />
            )}
            <span className="block text-xs font-bold mb-2 tracking-widest">{step.id}</span>
            <span className="block text-sm font-bold uppercase">{step.title.split(' ').slice(0, 2).join(' ')}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
