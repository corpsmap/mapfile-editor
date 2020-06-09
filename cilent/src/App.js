// eslint-disable-next-line
import React from "react";
import NavTabs from "./NavTabs";
import ParticlesDom from "./Particles";
import Footer from "./components/Footer";
import { connect } from "redux-bundler-react";

const App = ({ route: Route }) => {
  return (
    <div>
      <ParticlesDom />
      <NavTabs />
      <Route />
      <Footer />
    </div>
  );
};

export default connect("selectRoute", App);
