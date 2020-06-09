// eslint-disable-next-line
import React from "react";
import NavTabs from "./NavTabs";
import ParticlesDom from "./Particles";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Footer from "./components/Footer";
import { connect } from "redux-bundler-react";

const App = ({ route: Route }) => {
  return (
    <div>
      <Container className="justify-content flex-wrap" fluid="lg">
        <NavTabs />
        <Route />
        <Footer />
        <ParticlesDom />
      </Container>
    </div>
  );
};

export default connect("selectRoute", App);
