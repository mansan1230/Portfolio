import React, { useState } from 'react';
import { ProjectItem } from '../types.ts';

interface PortfolioProps {
  projects: ProjectItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('All');
  
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="min-h-screen bg-background py-32 relative">
       {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-brand-pink/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
              <span className="bg-brand-green/40 text-green-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-green-200">
                  Selected Works
              </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Things I've Built
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A playful collection of community initiatives, campaigns, and creative projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                filter === tag
                  ? 'bg-brand-salmon text-white border-brand-salmon shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)] -translate-y-1'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-brand-salmon hover:text-brand-salmon'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border-2 border-gray-100 transition-all duration-500 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:border-gray-200">
              <div className="aspect-[4/3] overflow-hidden bg-gray-50 relative p-4">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    {project.link ? (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full h-full relative cursor-pointer"
                    >
                        <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                         <div className="absolute inset-0 bg-brand-salmon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="bg-white text-brand-salmon px-6 py-2 rounded-full font-bold shadow-md transform scale-90 group-hover:scale-100 transition-transform">View Project</span>
                         </div>
                    </a>
                    ) : (
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                    />
                    )}
                </div>
              </div>
              
              <div className="p-8 pt-4 flex-1 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 leading-tight mb-2">
                    {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-brand-salmon transition-colors">
                        {project.title}
                        </a>
                    ) : (
                        project.title
                    )}
                    </h3>
                     <div className="w-12 h-1 bg-brand-yellow rounded-full"></div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;