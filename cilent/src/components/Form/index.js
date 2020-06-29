import React, { Component } from "react";
import { connect } from "redux-bundler-react";
import "./form.scss";
import Button from "react-bootstrap/Button";

class Form extends Component {
  render() {
    if (this.props.authIsLoggedIn) {
      return (
        <div>
          <strong>HELLO</strong> {this.props.authName}
        </div>
      );
    } else {
      return (
        <div>
          <Button onClick={this.props.doAuthLogin}>Login with CAC</Button>
        </div>
      );
    }
  }
}

export default connect(
  "doAuthLogin",
  "selectAuthIsLoggedIn",
  "selectAuthName",

  Form
);
