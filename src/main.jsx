import { StrictMode } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import NormalApp from './NormalApp.jsx'
import FireRedApp from './FireRedApp.jsx'
import Landing from './Normalcomponents/LandingPage.jsx'
import './index.css'

const Root = ()=>{
  // States: 'landing', 'normal', 'firered'
  const [appMode, setAppMode] = useState('landing'); 

  // Render the selected app based on state
  if (appMode === 'normal') {
    return <NormalApp setAppMode={setAppMode} />;
  }

  if (appMode === 'firered') {
    return <FireRedApp setAppMode={setAppMode} />;
  }

  // Default view
  return <Landing setAppMode={setAppMode} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
