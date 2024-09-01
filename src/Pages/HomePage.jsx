import React from 'react';
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Pricing from "../components/Pricing";
import Timeline from '../components/Timeline';

const HomePage = () => {
  return (
    <div>
    
    <div className="bg-secondary mx-auto">
      
    <Hero />
     <Portfolio />
     <Skills />
    
      {/* <Pricing  />
     <Blog /> 
     <Timeline /> */}
    </div>
    <Contact />
    </div>
  )
}

export default HomePage
