const actions = {
  loginSuccess: "FETCH_LOGIN_SUCCESS",
  loginError: "FETCH_LOGIN_ERROR",
  logoutSuccess: "FETCH_LOGOUT_SUCCESS",
  logoutError: "FETCH_LOGOUT_ERROR",
};

export default {
  name: "auth",
  getReducer: () => {
    const initialData = { token: null };

    return (state = initialData, { type, payload }) => {
      return Object.assign({}, state, payload);
    };
  },

  doAuthLogin: () => {},
  doAuthLogout: () => {},
  selectAuthToken: (state) => {
    return state.auth.token;
  },
};
