import React from "react";
// import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";
// import API from "../utils/API";
import { connect } from "redux-bundler-react";
import Button from "react-bootstrap/Button";

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.editorDidMount = this.editorDidMount.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }
  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  onChange(newValue, e) {
    this.props.doEditorUpdate(newValue);
  }
  onUpdate(e) {
    this.props.doEditorSave();
  }

  render() {
    const code = this.props.editorContent;
    const options = {
      selectOnLineNumbers: true,
    };
    console.log(this.props.editorIsSaving);
    return (
      <div>
        <h5>{this.props.editorfilename}</h5>
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
        <Button disabled={this.props.editorIsSaving} onClick={this.onUpdate}>
          Save File
        </Button>
      </div>
    );
  }
}

export default connect(
  "selectEditorContent",
  "selectEditorIsSaving",
  "selectEditorFilename",
  "doEditorUpdate",
  "doEditorPut",
  "doEditorSave",
  Editor
);
