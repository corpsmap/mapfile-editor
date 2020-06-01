import React, { Component } from "react";
// import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";
// import API from "../utils/API";
import { connect } from "redux-bundler-react";

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.editorDidMount = this.editorDidMount.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  onChange(newValue, e) {
    this.props.doEditorUpdate(newValue);
  }
  render() {
    const code = this.props.editorContent;
    const options = {
      selectOnLineNumbers: true,
    };
    return (
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
    );
  }
}

export default connect("selectEditorContent", "doEditorUpdate", Editor);
