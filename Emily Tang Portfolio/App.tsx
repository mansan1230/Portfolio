import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Portfolio from './components/Portfolio.tsx';
import { CV_JSON, PORTFOLIO_PROJECTS } from './constants.ts';

const ResumePage: React.FC = () => {
  const web3Experience = CV_JSON.experience.filter(e => e.type === 'web3');
  const otherExperience = CV_JSON.experience.filter(e => e.type === 'general');

  return (
    <>
      <Hero data={CV_JSON.personalInfo} />
      <Experience title="Web3 Experience" items={web3Experience} />
      <Experience title="Work Experience" items={otherExperience} />
      <Skills skills={CV_JSON.skills} />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background text-primary flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ResumePage />} />
            <Route path="/projects" element={<Portfolio projects={PORTFOLIO_PROJECTS} />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t-2 border-dashed border-gray-200 py-16 mt-0">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{CV_JSON.personalInfo.name}</h2>
            <p className="text-gray-500 text-sm mb-10 tracking-widest uppercase font-bold">{CV_JSON.personalInfo.title}</p>
            
            <div className="flex justify-center items-center gap-8 text-sm font-medium">
              <a href={`mailto:${CV_JSON.personalInfo.email}`} className="text-gray-600 hover:text-brand-salmon transition-colors duration-300">
                {CV_JSON.personalInfo.email}
              </a>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 cursor-default">
                {CV_JSON.personalInfo.phone}
              </span>
            </div>
            <p className="mt-12 text-xs text-gray-400">
              © {new Date().getFullYear()} Emily Tang.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;