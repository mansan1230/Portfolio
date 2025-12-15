import React from 'react';
import { CVData } from '../types.ts';

interface HeroProps {
  data: CVData['personalInfo'];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="relative pt-40 pb-20 overflow-hidden bg-background">
      {/* Background Doodles */}
      <svg className="absolute top-20 right-[5%] w-32 h-32 text-brand-blue opacity-50 animate-float" viewBox="0 0 100 100" fill="currentColor">
         <circle cx="50" cy="50" r="40" />
      </svg>
      <svg className="absolute top-40 left-[5%] w-24 h-24 text-brand-pink opacity-50 animate-spin-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
         <path d="M50 0 L100 100 L0 100 Z" />
      </svg>
      <div className="absolute top-[15%] left-[15%] w-4 h-4 bg-brand-salmon rounded-full animate-bounce"></div>
      <div className="absolute top-[25%] right-[25%] w-3 h-3 bg-brand-purple rounded-full animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        
        {/* "Sticker" Badge */}
        <div className="inline-block transform -rotate-2 hover:rotate-2 transition-transform duration-300 mb-8">
            <span className="bg-brand-purple/40 text-purple-900 border-2 border-purple-200 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(233,213,255,1)]">
            ✨ Web3 Content Specialist ✨
            </span>
        </div>
        
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-gray-900 mb-8 leading-tight">
          Hello, I'm <br/>
          <span className="relative inline-block mt-2">
            <span className="relative z-10">{data.name}</span>
            <span className="absolute bottom-2 left-0 w-full h-6 bg-brand-yellow -z-0 transform -rotate-1 rounded-sm opacity-80"></span>
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-secondary leading-relaxed font-light max-w-2xl mx-auto mb-10">
          {data.summary}
        </p>
        
        <div className="relative inline-block">
             {/* Doodle Arrow */}
            <svg className="absolute -left-24 top-0 w-20 h-20 text-gray-400 transform rotate-12 hidden sm:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10,50 Q50,10 90,50" />
                <path d="M90,50 L70,35" />
                <path d="M90,50 L75,65" />
            </svg>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-salmon rounded-full hover:bg-brand-salmon-hover transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                Let's Chat!
                </a>
                
                <div className="flex gap-4 text-gray-500 font-medium">
                <span className="hover:text-brand-salmon transition-colors cursor-pointer border-b-2 border-brand-salmon/20 hover:border-brand-salmon">{data.email}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;