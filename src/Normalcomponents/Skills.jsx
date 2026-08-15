import React from 'react';
import { skills } from '../data/skills'; 

const Skills = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-5 animate-fade-in">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl text-white uppercase tracking-[3px] mb-3 font-bold">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-[#39ff14] mx-auto shadow-[0_0_10px_#39ff14]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <div 
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/15 p-10 rounded-2xl text-center transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:border-[#39ff14] hover:bg-[#39ff14]/5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="mb-4 flex justify-center">
              <img
                src={skillGroup.icon}
                alt={`${skillGroup.category} icon`}
                className="w-16 h-16 object-contain"
              />
            </div>
            
            <h3 className="text-[#39ff14] text-2xl font-semibold mb-4">
              {skillGroup.category}
            </h3>
            
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {skillGroup.items.join(', ')}
            </p>
            
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#39ff14] shadow-[0_0_15px_#39ff14] rounded-full w-full"></div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Skills;