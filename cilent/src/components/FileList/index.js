import React from "react";
import { connect } from "redux-bundler-react";

//ul li

export default connect(
  "selectFilesItems",
  "doEditorOpen",
  "doUpdateUrl",
  ({ filesItems, doEditorOpen, doUpdateUrl }) => {
    return (
      <ul>
        {filesItems.map((file, i) => (
          <li
            key={i}
            onClick={() => {
              doEditorOpen(file.filename);
              doUpdateUrl("/editor");
            }}
          >
            name: {file.filename}
          </li>
        ))}
      </ul>
    );
  }
);
