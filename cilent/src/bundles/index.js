// smashes bundles into the store

import { composeBundles } from "redux-bundler";
import routeBundle from "./route-bundle";
import filesBundle from "./filesbundles.js";
import fileEditorBundle from "./fileEditorBundle";
import authBundle from "./auth-bundle";
import redirectBundle from "./redirect-bundle";

export default composeBundles(
  routeBundle,
  filesBundle,
  fileEditorBundle,
  authBundle,
  redirectBundle
);
