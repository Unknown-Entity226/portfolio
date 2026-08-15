import React, { useState } from 'react';
import Navbar from './Normalcomponents/Navbar';
import Home from './Normalcomponents/Home';
import Skills from './Normalcomponents/Skills';
import Projects from './Normalcomponents/Projects';
import Experience from './Normalcomponents/Experience';
import About from './Normalcomponents/About';
import Contact from './Normalcomponents/Contact';

const NormalApp = ({ setAppMode }) => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="animate-fade-in min-h-screen text-white flex flex-col">
      <button 
        onClick={() => setAppMode('landing')}
        className='absolute top-5 left-5 px-4 py-2 bg-transparent text-[#39ff14] border border-[#39ff14] rounded-md cursor-pointer'
      >
        Switch Portfolio
      </button>

      {/* Your Normal Portfolio Components Go Here */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Render */}
      <main className="animate-fade-in flex-1 max-w-6xl w-full mx-auto p-6 flex items-center justify-center">
        {activeTab === 'home' && <Home activeTab={activeTab} setActiveTab={setActiveTab}></Home>}
        {activeTab === 'projects' && <Projects activeTab={activeTab} setActiveTab={setActiveTab}></Projects>}
        {activeTab === 'experience' && <Experience activeTab={activeTab} setActiveTab={setActiveTab}></Experience>}
        {activeTab === 'skills' && <Skills activeTab = {activeTab} setActiveTab={setActiveTab}></Skills>}
        {activeTab === 'contact' && <Contact activeTab={activeTab} setActiveTab={setActiveTab}></Contact>}
        {activeTab === 'about'&& <About activeTab={activeTab} setActiveTab={setActiveTab}></About>}
      </main>
    </div>
  );
}

export default NormalApp;