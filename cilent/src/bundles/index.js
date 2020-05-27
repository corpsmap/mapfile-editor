// smashes bundles into the store

import { composeBundles } from "redux-bundler";
import routeBundle from "./route-bundle";
import filesBundle from "./filesbundles.js";

export default composeBundles(routeBundle, filesBundle);
