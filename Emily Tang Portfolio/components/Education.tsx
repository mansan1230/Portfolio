import React from 'react';
import { EducationItem } from '../types.ts';

interface EducationProps {
  items: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ items }) => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
         <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
            Education
            </h2>
            <div className="h-0.5 flex-1 bg-gray-200 rounded-full"></div>
            <div className="text-2xl animate-wiggle">🎓</div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((edu, index) => (
            <div key={index} className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900">{edu.institution}</h3>
                <p className="text-brand-salmon font-medium mt-2">{edu.degree}</p>
              </div>
              <span className="text-sm font-medium text-gray-400 mt-6 pt-6 border-t border-gray-100 block">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;