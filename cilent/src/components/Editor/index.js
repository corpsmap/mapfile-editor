import React from "react";
// import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";
// import API from "../utils/API";
import { connect } from "redux-bundler-react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Header from "react-bootstrap/ModalHeader";
import "./index.scss";
// list filename above editor with status edited
// need filename from store called in string
class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.editorDidMount = this.editorDidMount.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }
  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  onNameChange(e) {
    const filename = e.target.value;
    const code = this.props.editorContent;
    this.props.doEditorUpdate(filename, code);
  }
  onChange(newValue, e) {
    let currentFile = this.props.editorFilename;
    this.props.doEditorUpdate(currentFile, newValue);
  }
  onUpdate(e) {
    let currentFile = this.props.editorFilename;
    this.props.doEditorSave(currentFile);
  }

  render() {
    const code = this.props.editorContent;
    let currentFile = this.props.editorFilename;
    let saveError = this.props.editorError;

    const options = {
      selectOnLineNumbers: true
    };
    console.log(this.props.editorIsSaving);
    return (
      <div>
        {currentFile ? (
          <Container fluid="md" className="editor-container">
            <Row className="editor-row justify-content-md">
              <Col md={{ span: 8.5, offset: -8 }}>
                <Form className="editor-form">
                  <Form.Group>
                    <Form.Label column lg>
                      <h5> File Name : {currentFile}</h5>
                    </Form.Label>
                    <Col lg="12">
                      <Form.Control
                        type="text"
                        placeholder={currentFile}
                        value={currentFile}
                        onChange={this.onNameChange}
                        isInvalid={saveError}
                      ></Form.Control>
                      <FormControl.Feedback type="invalid" tooltip="true">
                        File <strong>Not Saved</strong> Please{" "}
                        <strong>Rename the Filename..</strong>
                      </FormControl.Feedback>
                    </Col>
                  </Form.Group>
                  <Button
                    disabled={this.props.editorIsSaving}
                    onClick={this.onUpdate}
                    type="submit"
                  >
                    {" "}
                    Save File
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden={this.props.editorIsSaving}
                    />
                    <span className="sr-only">Saving..</span>
                  </Button>
                </Form>{" "}
                <div className="position-relative">
                  <MonacoEditor
                    width="805px"
                    height="605px"
                    language="javascript"
                    theme="vs-dark"
                    value={code}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <div>
            <Col md>
              <Header>
                <h5>Open or add a new file to Edit</h5>
              </Header>
            </Col>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  "selectEditorContent",
  "selectEditorIsSaving",
  "selectEditorFilename",
  "selectEditorError",
  "doEditorUpdate",
  "doEditorPut",
  "doEditorSave",
  "doFilesFetch",
  Editor
);
