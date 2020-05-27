import React from "react";
import { connect } from "redux-bundler-react";

//ul li

export default connect(
  "selectFilesItems",
  ({ filesItems }) => {
    return (
      <ul>
        {filesItems.map((file) => (
          <li onClick={() => {
              console.log(file.name);
            }}>
            name: {file.name}
          </li>
        ))}
      </ul>
    );
  }
);
