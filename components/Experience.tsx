import React from 'react';
import { ExperienceItem } from '../types.ts';

interface ExperienceProps {
  items: ExperienceItem[];
  title: string;
}

const Experience: React.FC<ExperienceProps> = ({ items, title }) => {
  // Array of pastel colors to cycle through
  const cardColors = [
    'bg-brand-pink/20 border-brand-pink',
    'bg-brand-blue/20 border-brand-blue',
    'bg-brand-yellow/30 border-brand-yellow',
    'bg-brand-purple/20 border-brand-purple',
    'bg-brand-green/20 border-brand-green',
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center mb-16">
           <div className="relative">
             <h2 className="text-4xl font-serif font-bold text-gray-900 z-10 relative">
               {title}
             </h2>
             <div className="absolute -bottom-2 -right-2 w-full h-full bg-brand-yellow -z-0 rounded-lg transform rotate-2"></div>
           </div>
        </div>
        
        <div className="grid gap-8">
          {items.map((item, index) => {
             const colorClass = cardColors[index % cardColors.length];
             return (
                <div key={item.id} className={`p-8 rounded-[2rem] border-2 ${colorClass} transition-transform duration-300 hover:-translate-y-1`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                    <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">{item.role}</h3>
                    <p className="text-gray-700 font-medium mt-1 text-lg">{item.company}</p>
                    </div>
                    <span className="inline-block px-4 py-1.5 text-sm font-bold text-gray-600 bg-white/60 rounded-full border border-white whitespace-nowrap shadow-sm">
                    {item.period}
                    </span>
                </div>
                
                <ul className="space-y-3">
                    {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-base leading-relaxed">
                        <span className="mr-3 mt-1.5 text-brand-salmon text-xl">❋</span>
                        <span>{achievement}</span>
                    </li>
                    ))}
                </ul>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;