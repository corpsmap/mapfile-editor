import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Particles from 'react-particles-js';
import './App.css'; 

function App() {
  return (
  <Router>
    <div className="App"> 
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      </div>
      By Ankit Bansal 
      <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }} 
      />   
    </div>
  </Router>
    
    
  );
}

export default App;
