import Button from "react-bootstrap/Button";
import { connect } from "redux-bundler-react";
import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

class SaveBtn extends React.Component {
  constructor(props) {
    super(props);
    this.saving = this.saving.bind(this);
  }

  saving = () => {
    let isSaving = this.props.editorIsSaving;
    if (isSaving) {
      simulateNetworkRequest().then(() => {
        this.props.onUpdate();
      });
    }
  };

  render() {
    let isSaving = this.props.editorIsSaving;
    return (
      <Button
        variant="primary"
        disabled={isSaving}
        onClick={!isSaving ? this.saving : null}
      >
        {isSaving ? "Saving…" : "Click to Save"}
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden={!isSaving}
        />
        <span className="sr-only">Saving..</span>
      </Button>
    );
  }
}

export default connect("selectEditorIsSaving", SaveBtn);
