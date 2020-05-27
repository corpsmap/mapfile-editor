// eslint-disable-next-line
import React from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavTabs from "./NavTabs";
// import Login from './pages/Login'
// import Editor from './pages/Editor'
// import Mapview from './pages/Mapview'
import "./App.css";
import ParticlesDom from "./Particles";
import { connect } from "redux-bundler-react";

const App = ({ route: Route }) => {
  return (
    <div>
      <ParticlesDom />
      <NavTabs />
      <Route />
    </div>
  );
};

export default connect("selectRoute", App);
