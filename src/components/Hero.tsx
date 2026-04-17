import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Brain } from 'lucide-react';

const StudyCard = ({ 
  color, 
  question, 
  diagram, 
  rotation = 0, 
  zIndex = 0, 
  delay = 0 
}: { 
  color: string, 
  question: string, 
  diagram: React.ReactNode, 
  rotation?: number, 
  zIndex?: number,
  delay?: number
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 40, rotate: rotation }}
    animate={{ opacity: 1, y: 0, rotate: rotation }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    style={{ zIndex }}
    className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
  >
    {/* Top: Colored Area with Diagram */}
    <div className={`${color} h-[60%] relative flex items-center justify-center p-2`}>
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        {diagram}
      </div>
    </div>

    {/* Bottom: Question Area */}
    <div className="h-[40%] p-6 flex flex-col justify-between">
      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary opacity-60">Question:</span>
        <h3 className="text-lg md:text-xl font-bold leading-tight tracking-tight uppercase">{question}</h3>
      </div>
      <div className="pt-4 border-t border-ink/20 flex justify-between items-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink">Check The Answer</span>
      </div>
    </div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="container-wide section-gap pt-16 md:pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95]"
          >
            Prepare for exams faster with AI flashcards
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl md:text-2xl text-secondary mb-6 leading-relaxed max-w-lg">
              Upload your notes or PDFs. Quizpace turns them into interactive flashcards and a personalized study plan in minutes.
            </p>
            <p className="text-lg text-secondary mb-10 leading-relaxed max-w-lg">
              We're gearing up for launch! Quizpace is coming soon to help you study smarter and prepare for exams with confidence.
            </p>
            
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-6 items-center">
                <a 
                  href="#benefits" 
                  className="group flex items-center gap-2 px-8 py-4 bg-ink text-white rounded-full text-lg font-bold hover:bg-ink/90 transition-all shadow-lg shadow-ink/10"
                >
                  Learn more
                </a>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-secondary opacity-40 ml-4">
                Launching May 2026
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center p-8 md:p-16">
          <div className="relative w-full max-w-sm aspect-[3/4] lg:-translate-y-12 lg:translate-x-12">
            {/* Back Card: Mitochondria */}
            <StudyCard 
              color="bg-blush"
              question="Name this cell organelle and its part."
              rotation={8}
              zIndex={10}
              delay={0.4}
              diagram={
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 text-ink opacity-40">
                  <ellipse cx="50" cy="50" rx="35" ry="20" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M25 50 Q30 40 35 50 T45 50 T55 50 T65 50 T75 50" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="75" y1="35" x2="90" y2="20" stroke="currentColor" strokeWidth="1" />
                  <line x1="75" y1="65" x2="90" y2="80" stroke="currentColor" strokeWidth="1" />
                  <line x1="25" y1="35" x2="10" y2="20" stroke="currentColor" strokeWidth="1" />
                </svg>
              }
            />

            {/* Middle Card: Brain */}
            <StudyCard 
              color="bg-violet"
              question="Identify the highlighted brain lobe."
              rotation={-4}
              zIndex={20}
              delay={0.3}
              diagram={
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 text-white opacity-80">
                  <path d="M30 50 Q30 30 50 30 T70 50 T50 70 T30 50 M50 30 Q60 20 75 30 T80 50 T70 70" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M40 40 Q50 35 60 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                  <line x1="70" y1="40" x2="85" y2="30" stroke="currentColor" strokeWidth="1" />
                  <text x="87" y="28" fontSize="6" fill="currentColor" className="font-bold">BRAIN</text>
                  <line x1="70" y1="65" x2="85" y2="75" stroke="currentColor" strokeWidth="1" />
                  <text x="87" y="78" fontSize="6" fill="currentColor" className="font-bold">LOBE</text>
                </svg>
              }
            />

            {/* Front Card: Neuron */}
            <StudyCard 
              color="bg-[#e6ea9c]"
              question="Which part of the neuron receives incoming signals"
              rotation={-12}
              zIndex={30}
              delay={0.2}
              diagram={
                <img 
                  src="/Neuron_1.png" 
                  alt="Neuron Diagram" 
                  className="w-full h-full object-contain scale-95"
                  referrerPolicy="no-referrer"
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
