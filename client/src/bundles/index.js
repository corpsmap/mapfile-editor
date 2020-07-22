// smashes bundles into the store

import { composeBundles, createCacheBundle } from "redux-bundler";
import routeBundle from "./route-bundle";
import filesBundle from "./filesbundles.js";
import fileEditorBundle from "./fileEditorBundle";
import authBundle from "./auth-bundle";
import nestedUrlBundle from "./nested-url-bundle";
import cache from "../cache";

export default composeBundles(
  routeBundle,
  filesBundle,
  fileEditorBundle,
  authBundle,
  nestedUrlBundle,
  createCacheBundle({ cacheFn: cache.set })
);
