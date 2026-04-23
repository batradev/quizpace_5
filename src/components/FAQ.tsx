import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is Quizpace?",
    answer: "Quizpace is an AI-powered exam prep app that turns your study material into flashcards, questions, and a personalized review plan."
  },
  {
    question: "Can I start for free?",
    answer: "Yes. Upon launch, we will offer a 3-day free trial so you can explore all features. Currently, Quizpace is in the final stages of development, and we are gearing up for our official release soon. Stay tuned!"
  },
  {
    question: "Is there a limit on how many files I can upload?",
    answer: "Yes, limits depend on your plan. Our three-day free plan allows up to 3 document uploads, while Pro offers unlimited uploads."
  },
  {
    question: "Can I use it on multiple devices?",
    answer: "Yes. Your study progress and materials are synced across your account, so you can switch between your laptop and mobile device seamlessly."
  },
  {
    question: "How does the AI ensure accuracy?",
    answer: "The AI extracts information directly from your uploaded documents. You can always see the exact source reference for every generated card to verify the facts."
  },
  {
    question: "How is this different from a regular flashcard app?",
    answer: "Instead of making you build everything manually, Quizpace generates cards from your material, shows where they came from, and helps organize your review schedule around your exam."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="container-wide pt-10 md:pt-16 pb-8 md:pb-24">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16">Frequently asked questions</h2>
      
      <div className="space-y-0 border-t border-ink">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-ink">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-5 md:py-8 flex justify-between items-center text-left group"
            >
              <span className="text-lg md:text-2xl font-bold group-hover:opacity-70 transition-opacity pr-6 md:pr-8">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 md:pb-8 text-base md:text-lg text-secondary leading-relaxed max-w-2xl">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
