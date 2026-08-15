import React from "react";

import github from "../assets/github_logo.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin_logo.png";
import gmail from "../assets/gmail.png";

const Contact = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-16 px-5 animate-fade-in">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-white uppercase tracking-[3px] mb-3 font-bold">
          Get In Touch
        </h2>
        {/* Neon Green Title Underline */}
        <div className="w-16 h-1 bg-[#39ff14] mx-auto shadow-[0_0_10px_#39ff14] mb-4"></div>
        <p className="text-gray-400 text-lg">
          Have a question or want to collaborate? My inbox is always open!
        </p>
      </div>

      {/* Contact Container */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#39ff14]/50">
        {/* Email Box */}
        <div className="mb-10">
          <div className="mb-4 flex items-center justify-center">
            <img src={gmail} alt="Gmail" className="w-20 h-20"/>
          </div>
          <p className="text-white text-lg mb-6 break-all">
            aaravgupta2012018@gmail.com
          </p>
          <a
            href="mailto:aaravgupta2012018@gmail.com"
            className="inline-block px-8 py-3 bg-[#39ff14] text-black font-bold rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-[0_0_20px_#39ff14]"
          >
            Send Message
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-evenly items-center gap-6 pt-8 border-t border-white/10">
          <a
            href="https://www.linkedin.com/in/aarav-gupta-3402bb2b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-sm bg-white/5 border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#39ff14]/15 hover:border-[#39ff14] hover:shadow-[0_5px_15px_rgba(57,255,20,0.2)]"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-12 h-12 object-contain"
            />
          </a>

          <a
            href="https://github.com/Unknown-Entity226"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-sm bg-white/5 border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#39ff14]/15 hover:border-[#39ff14] hover:shadow-[0_5px_15px_rgba(57,255,20,0.2)]"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-12 h-12 object-contain bg-white rounded-sm"
            />
          </a>

          <a
            href="https://www.instagram.com/_aaravv._.guptaa_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-sm bg-white/5 border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#39ff14]/15 hover:border-[#39ff14] hover:shadow-[0_5px_15px_rgba(57,255,20,0.2)]"
          >
            <img
              src={insta}
              alt="Instagram"
              className="w-12 h-12 object-contain bg-white rounded-sm"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
