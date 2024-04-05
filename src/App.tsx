import React from 'react';
import "./App.scss"
import Home from './levels/Home/Home';
import Background from './ui/Background/Background';
import Reveal from './ui/Reveal/Reveal';
import About from './levels/About/About';
import Skills from './levels/Skills/Skills';
import Portfolio from './levels/Portfolio/Portfolio';
import Education from './levels/Education/Education';
import Video from './ui/Video/Video';
import Contact from './levels/Contact/Contact';
import Menu from './ui/Menu/Menu';


function App() {
  return (
    <div className="app">
      <Background />
      <Home />
      <About />
      <Skills />
      <Video />
      <Education />
      <Portfolio />
      <Contact />
      <Menu />
    </div>
  );
}

export default App;
