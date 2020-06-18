import React from "react";
import { connect } from "redux-bundler-react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./filelist.scss";
//ul li

export default connect(
  "selectFilesItems",
  "selectEditorIsEditing",
  "doEditorOpen",
  "doEditorDelete",
  ({ filesItems, editorIsEditing, doEditorOpen, doEditorDelete }) => {
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
                <OverlayTrigger
                  key={i}
                  placement="left"
                  overlay={
                    <Tooltip id={`tooltip-left`}>
                      {" "}
                      Click on the filename to open the <strong>Editor</strong>
                    </Tooltip>
                  }
                >
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
                    <h5 className="file">{file.filename}</h5>
                    <Button
                      variant="primary"
                      className="deleteBtn"
                      onClick={() => doEditorDelete(file.filename)}
                    >
                      X
                    </Button>
                  </ListGroup.Item>
                </OverlayTrigger>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Tab.Container>
    );
  }
);
