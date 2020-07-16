// eslint-disable-next-line
import React from "react";
// import Container from "react-bootstrap/Container";
import { connect } from "redux-bundler-react";
import NavTabs from "./NavTabs";

const App = ({ route: Route }) => {
  return (
    <div className="App">
      <NavTabs />
      <Route />
    </div>
  );
};

export default connect("selectRoute", App);
