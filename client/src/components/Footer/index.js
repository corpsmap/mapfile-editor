import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Jumbotron from "react-bootstrap/Jumbotron";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      {/* <Jumbotron className="text-center" /> */}
      <Row>
        <Col>
          <footer className="footer">
            <span>
              <strong>MapFile Editor 2020</strong>
            </span>
          </footer>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
