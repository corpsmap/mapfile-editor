import React from "react";
import Form from "../components/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ParticlesDom from "../Particles";
// import { Link, Route } from "react-router-dom";

function Login() {
  return (
    <div>
      <ParticlesDom />
      <Row>
        <Col className="align-self center display block " md={3}>
          <Card>
            <Card.Header as="h5">Login</Card.Header>
            <Card.Text>
              <Form />
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
