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
        {question && <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary opacity-60">Question:</span>}
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
              Quizpace is coming soon. Join the waitlist to study smarter and prepare with confidence.
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
              question=""
              rotation={8}
              zIndex={10}
              delay={0.4}
              diagram={null}
            />

            {/* Middle Card: Brain */}
            <StudyCard 
              color="bg-violet"
              question=""
              rotation={-4}
              zIndex={20}
              delay={0.3}
              diagram={null}
            />

            {/* Front Card: Neuron */}
            <StudyCard 
              color="bg-[#e6ea9c]"
              question="Which part of the neuron receives incoming signals?"
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
