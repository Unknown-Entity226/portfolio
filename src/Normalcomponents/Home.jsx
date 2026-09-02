import React from "react";
import profileImage from "../assets/image.png";
const Home = ({ setActiveTab }) => {
  return (
    <div className="flex items-center justify-center w-full min-h-[80vh] animate-fade-in">
      {/* Single Card Container (text + image inside one box, like reference) */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl gap-10 bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
        
        {/* Left Column: Text & Buttons */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Hi, I'm{" "}
            <span className="text-[#0d8338] drop-shadow-emerald-700">
              Aarav Gupta
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light tracking-wide">
            Full-Stack Developer & AI Enthusiast
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            I build interactive, scalable web experiences and innovative
            applications. Passionate about software engineering, artificial
            intelligence, and crafting clean solutions.
          </p>

          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            <button
              onClick={() => setActiveTab("projects")}
              className="px-8 py-3 bg-[#39ff14] text-black font-bold text-lg rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-[0_0_25px_#39ff14]"
            >
              View Projects
            </button>

            <a
              href="./assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent text-[#39ff14] border-2 border-[#39ff14] font-bold text-lg rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#39ff14]/10 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]">

              Download CV
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="shrink-0 flex justify-center items-center">
          <div className="relative w-220px h-55 md:w-[320px] md:h-80">
            <img
              src= {profileImage}
              alt="Aarav Gupta"
              className="w-full h-full object-cover rounded-full border-4 border-white/15 shadow-[0_0_30px_rgba(74,222,128,0.5)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.08] hover:border-[#4ade80] hover:shadow-[0_0_50px_#4ade80]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
