import { createRouteBundle } from "redux-bundler";
//pages
import Editor from "../pages/Editor";
import Login from "../pages/Login";

export default createRouteBundle({
  "/": Login,
  "/login": Login,
  "/files": Editor,
  "*": Login,
});
