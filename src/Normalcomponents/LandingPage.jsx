import React from "react";
import charizard from "../assets/charizard.png";
import normalport from "../assets/normalport.png";

const Landing = ({ setAppMode }) => {
  return (
    // Main Container
    <div className="flex flex-col items-center justify-center min-h-screen p-5 text-white">
      {/* Header Section */}
      <div className="text-center mb-12 bg-black/30 backdrop-blur-xl">
        <h1 className="p-1.5 text-5xl uppercase tracking-[2px] font-bold">
          Aarav Gupta
        </h1>
        <p className="text-gray-300 text-lg mt-3">Select your experience</p>
        {/* Neon Green Underline */}
        <div className="w-16 h-1 bg-[#39ff14] mx-auto my-4 shadow-[0_0_10px_#39ff14]"></div>
      </div>

      {/* Options Grid */}
      <div className="flex gap-8 flex-wrap justify-center">
        {/* Option 1: Normal Portfolio */}
        <div
          onClick={() => setAppMode("normal")}
          className="w-2xs bg-white/5 backdrop-blur-md border border-[#39ff14]/40 p-10 rounded-3xl flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-[#39ff14]/10 hover:border-[#39ff14] hover:shadow-[0_10px_30px_rgba(57,255,20,0.1)] group"
        >
          <img src={normalport} alt="FireRed Version" className="w-20 h-20" />

          <h2 className="text-[#39ff14] text-2xl font-semibold mb-4">Normal Version</h2>
        </div>

        {/* Option 2: Gamified Portfolio */}
        <div
          onClick={() => setAppMode("firered")}
          className="w-2xs bg-white/5 backdrop-blur-md border border-[#39ff14]/40 p-10 rounded-3xl flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-[#39ff14]/10 hover:border-[#39ff14] hover:shadow-[0_10px_30px_rgba(57,255,20,0.1)] group"
        >
          <img src={charizard} alt="FireRed Version" className="w-20 h-20" />
          <h2 className="text-[#39ff14] text-2xl font-semibold mb-4">
            FireRed Version
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
