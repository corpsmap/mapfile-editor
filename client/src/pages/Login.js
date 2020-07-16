import React from "react";
import Form from "../components/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ParticlesDom from "../Particles";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import "./login.scss";

function Login() {
  return (
    <div>
      <Container className="fluid-xl container-login">
        <Row className="justify-content-md-center login-row" xs={6} xl={4}>
          <Col
            className="align-self center display block login-col"
            xs={6}
            md={4}
          >
            <Card>
              <Card.Header as="h5">Login</Card.Header>
              <Form />
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
      <ParticlesDom />
    </div>
  );
}

export default Login;
