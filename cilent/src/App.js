import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Login from "./components/pages/Login";
import Editor from "./components/pages/Editor";
import Mapview from "./components/pages/Mapview";
import './App.css'; 
import ParticlesDom from "./components/Particles";

function App() {
  return (
    <div>
      <ParticlesDom />
  <Router>
    
   
    
      <NavTabs />
      
      <Route exact path="/" component={Login}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/mapview" component={Mapview}/>
      <Route path="/editor" component={Editor}/>
      
   
    
  </Router>
  
  </div>
    
  );
}

export default App;
