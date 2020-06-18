// import { createSelector } from 'redux-bundler';
const actions = {
  FETCH_SUCESS: "FETCH_SUCCESS",
  FETCH_START: "FETCH_START",
};

// you can create on giant action file

// import actions from "./actions"

export default {
  name: "files",
  getReducer: () => {
    const initialData = {
      apiRoot:
        process.env.NODE_ENV === "development" ? "http://localhost:3030" : "",
      items: [],
      shouldFetch: false,
    };
    // if state has something it it ignores initial data but not it sets it as state,
    //
    return (state = initialData, { type, payload }) => {
      if (type === actions.FETCH_SUCESS) {
        // DO SOMETHING about it
        return Object.assign(
          {
            /* inherits state */
          },
          state,
          payload
        );
      } else if (type === actions.FETCH_START) {
        return Object.assign({}, state, payload);
      } else if (
        type === "EDITOR_PUT_SUCCESS" ||
        type === "EDITOR_POST_SUCCESS" ||
        type === "EDITOR_DELETE_SUCCESS"
      ) {
        return Object.assign({}, state, { shouldFetch: true });
      } else {
        // always return state or the app will hang up
        return state;
      }
    };
  },
  doFilesFetch: () => ({ dispatch, store }) => {
    dispatch({
      type: actions.FETCH_START,
      payload: {
        shouldFetch: false,
      },
    });
    const root = store.selectFilesAPIRoot();
    fetch(`${root}/api/files`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: actions.FETCH_SUCESS,
          payload: {
            items: data,
          },
        });
      })
      .catch((error) => {
        console.log("files did not fetch", error);
        //if network flakes or repsonse isnt json
      }); // only if running on the same route of our api otherwise us await async
  }, // dispacth sends an action to a reducer

  selectFilesAPIRoot: (state) => {
    return state.files.apiRoot;
  },
  selectFilesItems: (state) => {
    return state.files.items;
  },
  reactFilesShouldFetch: (state) => {
    if (state.files.shouldFetch) return { actionCreator: "doFilesFetch" };
  },
  init: (store) => {
    store.doFilesFetch();
  },
};
