import { createSelector } from "redux-bundler";

const publicUrls = ["/", "/login", "/files", "/files/:filename"];

export default {
  name: "redirects",
  reactRedirects: createSelector(
    "selectAuthIsLoggedIn",
    "selectPathname",
    (authIsLoggedIn, pathname) => {
      if (authIsLoggedIn && publicUrls.includes(pathname)) {
        return { actionCreator: "doUpdateUrl", args: ["/files"] };
      }
      if (!authIsLoggedIn && publicUrls.includes(pathname)) {
        return { actionCreator: "doUpdateUrl", args: ["/login"] };
      }
      // removes trailing slash
      if (pathname !== "/" && publicUrls.includes(pathname)) {
        return { actionCreator: "doReplaceUrl", args: [pathname.slice(0, -1)] };
      }
    }
  ),
};
