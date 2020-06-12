import React from "react";
import { connect } from "redux-bundler-react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";

//ul li

export default connect(
  "selectFilesItems",
  "selectEditorIsEditing",
  "doEditorOpen",
  ({ filesItems, editorIsEditing, doEditorOpen }) => {
    return (
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="false">
        <Col>
          <Card border="info">
            <Button
              variant="info"
              className="CardBtn"
              onClick={() => {
                doEditorOpen();
              }}
            >
              Add New File
            </Button>
            <Card.Header as="h5">Map Files</Card.Header>
            <ListGroup as="ul">
              {filesItems.map((file, i) => (
                <ListGroup.Item
                  as="li"
                  disabled={editorIsEditing}
                  active={editorIsEditing}
                  variant="light"
                  action
                  href={"#" + i}
                  key={i}
                  onClick={() => {
                    doEditorOpen(file.filename);
                  }}
                >
                  name: {file.filename}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Tab.Container>
    );
  }
);
