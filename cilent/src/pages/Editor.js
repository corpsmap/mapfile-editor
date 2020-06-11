import React from "react";
import Monaco from "../components/Editor";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Filelist from "../components/FileList";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./editor.scss";

function Editor() {
  return (
    <div>
      <Jumbotron fluid className="jumbo-edit">
        <h1>Editor Page</h1>
      </Jumbotron>
      <Row>
        <Col>
          <Monaco />
        </Col>
        <Col md={{ span: 4, offset: -8 }} className="display-inline">
          <Filelist />
        </Col>
      </Row>
    </div>
  );
}

export default Editor;
