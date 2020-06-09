import React from "react";
import Form from "../components/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// import { Link, Route } from "react-router-dom";

function Login() {
  return (
    <div>
      <Jumbotron>
        <h1>Login</h1>
      </Jumbotron>
      <Row>
        <Card>
          <Form />
        </Card>
      </Row>
    </div>
  );
}

export default Login;
