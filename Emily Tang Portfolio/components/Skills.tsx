import React from 'react';
import { SkillCategory } from '../types.ts';

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="py-20 bg-white border-y-2 border-gray-100 dashed">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
             <span className="bg-brand-blue/30 text-blue-800 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                 My Toolkit
             </span>
            <h2 className="text-4xl font-serif font-bold text-gray-900">
            Skills & Expertise
            </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-background p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-brand-salmon"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold text-gray-700 bg-white border-2 border-gray-100 hover:border-brand-salmon hover:text-brand-salmon hover:scale-105 transition-all duration-300 cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;