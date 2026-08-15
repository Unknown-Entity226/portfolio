import React from 'react';
import { projects } from '../data/projects'; 

const Projects = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-5 animate-fade-in">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className=" p-2.5 text-4xl text-white uppercase tracking-[3px] mb-3 font-bold bg-black/30 backdrop-blur-lg">
          Featured Projects
        </h2>
        {/* Neon Green Title Underline */}
        <div className="w-20 h-1 bg-[#39ff14] mx-auto shadow-[0_0_10px_#39ff14]"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white/5 backdrop-blur-md border border-white/15 p-6 rounded-2xl flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:border-[#39ff14] hover:bg-[#39ff14]/5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            {/* Image / Icon Area */}
            <div className="w-full h-48 bg-black rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-white/10">
              {project.icon ? (
                <img 
                  src={project.icon} 
                  alt={project.title} 
                  className="w-80% h-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                />
              ) : (
                <div className="text-6xl drop-shadow-[0_0_15px_#39ff14]">💻</div>
              )}
            </div>

            {/* Project Details */}
            <h3 className="text-[#39ff14] text-2xl font-bold mb-3">
              {project.title}
            </h3>
            
            <p className="text-amber-400 text-sm leading-relaxed mb-6 grow">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-white/10 text-gray-200 text-xs px-3 py-1.5 rounded-full border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-auto">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 border-2 border-[#39ff14] text-[#39ff14] rounded-xl font-bold transition-all duration-300 hover:bg-[#39ff14]/10 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)]"
              >
                GitHub
              </a>
              
              {project.live? (
                <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 bg-[#39ff14] text-black rounded-xl font-bold transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_#39ff14]"
              >
                Live Demo
              </a>):(
                <p className='text-sm opacity-50 text-gray-400'><i>Can't be viewed on browser</i></p>
              )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Projects;