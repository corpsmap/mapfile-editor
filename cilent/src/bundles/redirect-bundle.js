import { createSelector } from "redux-bundler";

const publicUrls = ["/", "/login"];

export default {
  name: "redirects",
  getReducer: () => {
    const initialData = { shouldWait: false };
    return (state = initialData, { type, payload }) => {
      if (type === "REDIRECT_SUCCESS") {
        return Object.assign({}, state, { shouldWait: true });
      } else {
        return state;
      }
    };
  },
  // doTimeout: () => ({ dispatch, store }) => {
  //   let allowRunTimeout = store.selectAuthIsLoggedIn();
  //   let filename = store.selectEditorFilename();
  //   dispatch({
  //     type: "REDIRECT_SUCCESS",
  //     payload: { shouldWait: false },
  //   });
  //   if (allowRunTimeout) {
  //     return setTimeout(() => {
  //       store.doUpdateUrl(`/files/${filename}`);
  //     }, 3000);
  //   } else {
  //     return store.Window.alert("Please login");
  //   }
  // },
  reactRedirects: createSelector(
    "selectAuthIsLoggedIn",
    "selectPathname",
    "selectEditorFilename",
    (authIsLoggedIn, pathname) => {
      console.log("redirect", authIsLoggedIn, pathname);
      if (!authIsLoggedIn && !publicUrls.includes(pathname)) {
        return { actionCreator: "doUpdateUrl", args: ["/login"] };
      }
      if (pathname === "/logout") {
        return { actionCreator: "doAuthLogout" };
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
