import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Pricing from "./components/Pricing";
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
 

  return (
    <>
    <Navbar />
    <div className="bg-secondary mx-auto">
      
    <Hero />
     <Portfolio />
     <Skills />
    
     <Pricing  />
     <Blog />
    </div>
    <Contact />
    </>
  )
}

export default App
