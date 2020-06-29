import Alert from "react-bootstrap/Alert";
import { connect } from "redux-bundler-react";

function ErrAlert() {
  return <Alert></Alert>;
}

export default connect("selectEditorError", ErrAlert);
