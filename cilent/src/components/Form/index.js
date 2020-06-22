import React, { Component } from "react";
import { connect } from "redux-bundler-react";
import "./form.scss";

class Form extends Component {
  render() {
    if (this.props.authIsLoggedIn) {
      return <div>{this.props.authName}</div>;
    } else {
      return (
        <div>
          <button onClick={this.props.doAuthLogin}>Submit</button>
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
