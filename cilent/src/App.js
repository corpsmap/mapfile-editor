import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import './App.css'; 
import ParticlesDom from "./components/Particles";

function App() {
  return (
    <div>
      <ParticlesDom />
  <Router>
    
   
    
      <NavTabs />
      
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      
   
    
  </Router>
  
  </div>
    
  );
}

export default App;
