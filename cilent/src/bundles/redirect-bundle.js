import { createSelector } from "redux-bundler";

const publicUrls = ["/", "/login", "/files", "/files/:filename"];

export default {
  name: "redirects",
  reactRedirects: createSelector(
    "selectAuthIsLoggedIn",
    "selectPathname",
    "selectEditorFilename",
    (authIsLoggedIn, pathname, editorFilename) => {
      if (authIsLoggedIn && publicUrls.includes(pathname)) {
        return {
          actionCreator: "doUpdateUrl",
          args: [`/files/${editorFilename}`],
        };
      }
      if (!authIsLoggedIn && pathname.startsWith("/files")) {
        return { actionCreator: "doUpdateUrl", args: ["/login"] };
      }
      if (!editorFilename && pathname === "/files/null") {
        return { actionCreator: "doReplaceUrl", args: ["/files/editor"] };
      }
      // removes trailing slash
      if (pathname !== "/" && pathname.endsWith("/")) {
        return { actionCreator: "doReplaceUrl", args: [pathname.slice(0, -1)] };
      }
      //   if (!authIsLoggedIn && pathname !== "/files" && pathname.endsWith("/")) {
      //     return { actionCreator: "doReplaceUrl", args: [pathname.slice(0, -1)] };
      //   }
    }
  ),
};
