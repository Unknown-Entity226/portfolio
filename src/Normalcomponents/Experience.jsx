import React from 'react';
import { experienceData } from '../data/experience';
import { stats } from '../data/leetcodeStats';

const Experience = () => {
  let total = Number(stats.easy+stats.medium+stats.hard);
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-5 animate-fade-in">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl text-white uppercase tracking-[3px] mb-3 font-bold">
          Experience & Stats
        </h2>
        <div className="w-24 h-1 bg-[#39ff14] mx-auto shadow-[0_0_10px_#39ff14]"></div>
      </div>

      <div className="flex flex-col gap-16">
        
        {/* 1. Work Experience Sub-section */}
        <div>
          <h3 className="text-[#39ff14] text-2xl font-bold mb-8 uppercase tracking-wider">
            Work Experience
          </h3>
          <div className="relative border-l-2 border-[#39ff14]/30 ml-3 md:ml-6">
            {experienceData.map((exp) => (
              <div key={exp.id} className="mb-12 ml-8 md:ml-12 relative group">
                {/* Experience Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/15 p-8 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#39ff14] hover:bg-[#39ff14]/5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-[#39ff14] text-2xl font-bold">{exp.role}</h3>
                      <h4 className="text-white text-lg font-semibold mt-1">{exp.company}</h4>
                    </div>
                    <div className="mt-2 md:mt-0 text-left md:text-right">
                      <span className="inline-block px-3 py-1 bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/30 rounded-full text-sm font-medium mb-1">
                        {exp.period}
                      </span>
                      <p className="text-gray-400 text-sm mt-1">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 text-sm md:text-base leading-relaxed marker:text-[#39ff14]">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-white/10 text-gray-200 text-xs px-3 py-1.5 rounded-full border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Coding Stats Sub-section */}
        <div>
          <h3 className="text-[#39ff14] text-2xl font-bold mb-8 uppercase tracking-wider">
            Coding Stats
          </h3>
          <div className="bg-white/5 backdrop-blur-md border border-white/15 p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#39ff14]/50">
            
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-lg uppercase tracking-wide">Total Problems Solved</p>
                <h4 className="text-5xl font-bold text-white mt-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  {total}
                </h4>
              </div>
              
              <a 
                href={"https://github.com/Unknown-Entity226/LeetCode-Solutions"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-transparent text-[#39ff14] border-2 border-[#39ff14] rounded-xl font-bold transition-all duration-300 hover:bg-[#39ff14]/10 hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]"
              >
                View Solutions on GitHub
              </a>
            </div>

            {/* Custom Bar Graph */}
            <div className="space-y-4">
              {/* Easy */}
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span className="text-[#00b8a3]">Easy</span>
                  <span className="text-gray-300">{stats.easy}</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#00b8a3] shadow-[0_0_10px_#00b8a3] rounded-full" 
                    style={{ width: `${(stats.easy / total) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Medium */}
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span className="text-[#ffc01e]">Medium</span>
                  <span className="text-gray-300">{stats.medium}</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#ffc01e] shadow-[0_0_10px_#ffc01e] rounded-full" 
                    style={{ width: `${(stats.medium / total) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Hard */}
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span className="text-[#ef4743]">Hard</span>
                  <span className="text-gray-300">{stats.hard}</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#ef4743] shadow-[0_0_10px_#ef4743] rounded-full" 
                    style={{ width: `${(stats.hard / total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;