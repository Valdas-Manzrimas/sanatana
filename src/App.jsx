import React from 'react';
import './App.css';
import { HeroSection } from './components/HeroSection.jsx';
import ScrollCarousel from './components/ScrollCarousel';
import TextParallax from "./components/TextParallax";
import { ColorProvider } from './context/ColorContext';

function App() {
  return (
    <ColorProvider>
      <HeroSection />
      <TextParallax />
      <ScrollCarousel />
    </ColorProvider>
  );
}

export default App;