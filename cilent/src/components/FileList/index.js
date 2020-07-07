import React from "react";
import { connect } from "redux-bundler-react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Switch from "../ToggleSwitch";
import "./filelist.scss";
//ul li

class FileList extends React.Component {
  constructor(props) {
    super(props);
    this.onOpenTemplate = this.onOpenTemplate.bind(this);
    this.onAddNewFile = this.onAddNewFile.bind(this);
    this.onDeleteFile = this.onDeleteFile.bind(this);
    this.onOpenFile = this.onOpenFile.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.toggleDelOff = this.toggleDelOff.bind(this);
  }
  onOpenTemplate(e) {
    this.props.doEditorOpenTemplate();
  }
  onOpenFile(filename) {
    this.props.doEditorOpen(filename);
  }
  onDeleteFile(file) {
    this.props.doEditorDelete(file);
  }
  onAddNewFile() {
    this.props.doEditorOpen();
  }
  toggleDelete(event) {
    var bool = event.target.value;
    console.log(bool, "toggle status");
    if (bool === false) {
      this.props.doToggleDeleteOn();
    } else {
      this.props.doToggleDeleteOff();
    }
    console.log(this.props.doToggleDeleteOn(), "A");
    console.log(this.props.doToggleDeleteOff(), "B");
  }
  toggleDelOff() {
    this.props.doToggleDeleteOff();
  }
  render() {
    let editing = this.props.editorIsEditing;
    let filesItems = this.props.filesItems;
    let isDeleting = this.props.editorIsDeleting;
    console.log(isDeleting, "delete status");
    return (
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="false">
        <Col>
          <Card border="info">
            <Button
              variant="info"
              className="CardBtn"
              onClick={() => {
                this.onAddNewFile();
              }}
            >
              Add New File
            </Button>
            <Button
              variant="dark"
              className="CardBtn"
              onClick={() => {
                this.onOpenTemplate();
              }}
            >
              Use Template File
            </Button>
            <Card.Header as="h4">
              Map Files{" "}
              <Switch
                theme="default"
                className="d-flex"
                enabled={isDeleting}
                onStateChanged={this.toggleDelete}
              ></Switch>
            </Card.Header>
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
                    disabled={editing}
                    active={editing}
                    variant="light"
                    action
                    href={"#" + i}
                    key={i}
                    onClick={() => {
                      this.onOpenFile(file.filename);
                    }}
                  >
                    <h5 className="file">{file.filename}</h5>
                    <Button
                      variant="danger"
                      className="deleteBtn"
                      onClick={() => this.onDeleteFile(file.filename)}
                      disabled={isDeleting}
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
}

export default connect(
  "selectFilesItems",
  "selectEditorIsEditing",
  "selectEditorError",
  "selectEditorIsDeleting",
  "doEditorOpen",
  "doEditorDelete",
  "doEditorOpenTemplate",
  "doToggleDeleteOn",
  "doToggleDeleteOff",
  FileList
);
