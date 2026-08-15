import React from 'react';

const About = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-5 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl text-white uppercase tracking-[3px] mb-3 font-bold">
          About Me
        </h2>
        <div className="w-20 h-1 bg-[#39ff14] mx-auto shadow-[0_0_10px_#39ff14]"></div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="bg-white/5 backdrop-blur-md border border-white/15 p-8 md:p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#39ff14] hover:shadow-[0_10px_40px_rgba(57,255,20,0.2)]">
          <h3 className="text-[#39ff14] text-2xl font-bold mb-6 uppercase tracking-wider">
            Professional Summary
          </h3>
          <div className="text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              I am Aarav Gupta, a full-stack developer and software engineering student focused on building scalable web applications and intelligent systems. My expertise spans modern frontend frameworks, robust backend architectures, and integrating artificial intelligence to solve complex technical challenges.
            </p>
            <p>
              Beyond traditional web development, I actively engage in quantitative finance research and build interactive web-based simulations. I thrive in competitive programming environments and am driven by a passion for clean code, continuous learning, and crafting seamless user experiences.
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/15 p-8 md:p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#39ff14] hover:shadow-[0_10px_40px_rgba(57,255,20,0.2)]">
          <h3 className="text-[#39ff14] text-2xl font-bold mb-6 uppercase tracking-wider">
            Education
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-l-2 border-[#39ff14]/30 pl-4 md:pl-6">
            <div>
              <h4 className="text-white text-xl font-bold">
                B.Tech in Computer Science and Engineering - Artificial Intelligence (CSE-AI)
              </h4>
              <p className="text-gray-400 text-lg mt-2">
                Guru Gobind Singh Indraprastha University (GGSIPU)
              </p>
              <p className="text-gray-500 text-md mt-1">
                University School of Information, Communication and Technology (USICT)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;