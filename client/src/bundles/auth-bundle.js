import { createSelector } from "redux-bundler";

const actions = {
  loginSuccess: "FETCH_LOGIN_SUCCESS",
  loginError: "FETCH_LOGIN_ERROR",
  logoutSuccess: "FETCH_LOGOUT_SUCCESS",
  logoutError: "FETCH_LOGOUT_ERROR",
};

export default {
  name: "auth",
  getReducer: () => {
    const initialData = {
      apiUrl:
        "https://corpsmap-dev.sec.usace.army.mil/cwbi/goauth/token/318e650f-6533-4ca6-9cb2-4439941d8dc6",
      token: null,
    };

    return (state = initialData, { type, payload }) => {
      switch (type) {
        case actions.logoutError:
        case actions.logoutSuccess:
        case actions.loginError:
        case actions.loginSuccess:
          return Object.assign({}, state, payload);
        default:
          return state;
      }
    };
  },

  doAuthLogin: () => ({ dispatch, store }) => {
    const root = store.selectAPIUrl();
    console.log(root);
    fetch(`${root}`)
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((data) => {
        dispatch({
          type: actions.loginSuccess,
          payload: { token: data },
        });
      });
  },
  doAuthLogout: () => ({ dispatch, store }) => {
    dispatch({
      type: actions.logoutSuccess,
      payload: { token: null },
    });
    store.doUpdateUrl("/");
  },

  selectAuthName: createSelector("selectAuthToken", (token) => {
    if (!token) {
      return null;
    } else {
      const parse = token.split(".");
      console.log("a", parse);
      /*  atob()//decoder */
      const body = JSON.parse(atob(parse[1]));
      console.log("b", body);
      return body.name;
    }
  }), //function names or arguments
  selectAuthIsLoggedIn: (state) => {
    return !!state.auth.token; // "!!" returns false
  },
  selectAPIUrl: (state) => {
    return state.auth.apiUrl;
  },
  selectAuthToken: (state) => {
    return state.auth.token;
  },
  persistActions: [actions.loginSuccess, actions.logoutSuccess],
};
