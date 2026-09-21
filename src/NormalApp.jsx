import { Routes, Route } from 'react-router-dom';
import Navbar from './Normalcomponents/Navbar';
import Home from './Normalcomponents/Home';
import Skills from './Normalcomponents/Skills';
import Projects from './Normalcomponents/Projects';
import Experience from './Normalcomponents/Experience';
import About from './Normalcomponents/About';
import Contact from './Normalcomponents/Contact';

const NormalApp = () => {
  return (
    <div className="animate-fade-in min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="animate-fade-in flex-1 max-w-6xl w-full mx-auto p-6 flex items-center justify-center">
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default NormalApp;