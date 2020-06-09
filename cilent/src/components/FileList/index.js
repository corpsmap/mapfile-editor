import React from "react";
import { connect } from "redux-bundler-react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "../Container";
import Col from "react-bootstrap/Col";

//ul li

export default connect(
  "selectFilesItems",
  "doEditorOpen",
  ({ filesItems, doEditorOpen }) => {
    return (
      <Col>
        <Card>
          <Button
            className="CardBtn"
            onClick={() => {
              doEditorOpen();
            }}
          >
            Add New File
          </Button>
          <ul>
            {filesItems.map((file, i) => (
              <li
                key={i}
                onClick={() => {
                  doEditorOpen(file.filename);
                }}
              >
                name: {file.filename}
              </li>
            ))}
          </ul>
        </Card>
      </Col>
    );
  }
);
