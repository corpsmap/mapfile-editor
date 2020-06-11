// eslint-disable-next-line
import React from "react";
import Container from "react-bootstrap/Container";
import { connect } from "redux-bundler-react";
import NavTabs from "./NavTabs";
import Footer from "./components/Footer";
const App = ({ route: Route }) => {
  return (
    <div className="App">
      <Container className="justify-content flex-wrap" fluid="lg">
        <NavTabs />
        <Route />
        <Footer />
      </Container>
    </div>
  );
};

export default connect("selectRoute", App);
