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
    this.onEnabled = this.onEnabled.bind(this);
  }
  // onEnable ensures switch is matches boolean of switch event
  onEnabled(bool) {
    let enabled = bool;
    return enabled;
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
  // toggle delete uses event from switch to activate actions to change state of editorIsDeleting
  toggleDelete({ enabled }) {
    this.onEnabled(enabled);
    if (enabled === true) {
      return this.props.doEditorDelOn();
    } else {
      return this.props.doEditorDelOff();
    }
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
                enabled={this.onEnabled}
                onStateChanged={this.toggleDelete}
              ></Switch>
            </Card.Header>
            <div>
              {filesItems.map((file, i) => (
                <ListGroup horizontal={file} key={i}>
                  <OverlayTrigger
                    key={i}
                    placement="left"
                    overlay={
                      <Tooltip id={`tooltip-left`}>
                        {" "}
                        Click on the filename to open the{" "}
                        <strong>Editor</strong>
                      </Tooltip>
                    }
                  >
                    <ListGroup.Item
                      bsPrefix="list-item"
                      as="a"
                      disabled={editing}
                      active={editing}
                      variant="light"
                      action
                      key={i}
                      href={"#" + i}
                      onClick={() => {
                        this.onOpenFile(file.filename);
                      }}
                    >
                      <h5 className="file">
                        {file.filename}

                        <Button
                          key={i + "del"}
                          variant="danger"
                          className="deleteBtn"
                          onClick={() => this.onDeleteFile(file.filename)}
                          disabled={isDeleting}
                        >
                          X
                        </Button>
                      </h5>
                    </ListGroup.Item>
                  </OverlayTrigger>
                </ListGroup>
              ))}
            </div>
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
  "doEditorDelOn",
  "doEditorDelOff",
  FileList
);
