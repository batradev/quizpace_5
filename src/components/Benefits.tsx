import React from 'react';
import { Clock, Calendar, FileText } from 'lucide-react';

const benefits = [
  {
    title: "Save time on exam prep",
    text: "Stop spending hours turning notes into study material by hand. AI helps you go from raw content to active recall much faster.",
    image: "/1_card.png"
  },
  {
    title: "Personalized study plan",
    text: "The app organizes what to learn and when to review it, so you always know what to study today and how to stay on track.",
    image: "/2_card.png"
  },
  {
    title: "Real study material",
    text: "Work with text, tables, formulas, and handwritten notes — the kinds of materials students actually use.",
    image: "/3_card.png"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="container-wide section-gap">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
        <h2 className="text-4xl md:text-5xl font-bold max-w-md">
          Why Quizpace
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="group cursor-default">
            <div className="aspect-[4/3] rounded-[24px] mb-8 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] bg-bg-milk border border-ink/5">
              <img 
                src={benefit.image} 
                alt={benefit.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-3xl font-bold mb-4">{benefit.title}</h3>
            <p className="text-secondary leading-relaxed">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
