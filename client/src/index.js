import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import createStore from "./bundles";
import { Provider } from "redux-bundler-react";
import { getNavHelper } from "internal-nav-helper";
import App from "./App";
import "./index.css";

import cache from "./cache";
cache.getAll().then((initialData) => {
  const store = createStore(initialData);
  ReactDOM.render(
    <Provider store={store}>
      <div onClick={getNavHelper(store.doUpdateUrlWithHomepage)}>
        <App />
      </div>
    </Provider>,
    document.getElementById("root")
  );
});
