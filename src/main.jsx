import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NormalApp from './NormalApp.jsx'
import FireRedApp from './FireRedApp.jsx'
import Landing from './Normalcomponents/LandingPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio/*" element={<NormalApp />} />
        <Route path="/firered" element={<FireRedApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)