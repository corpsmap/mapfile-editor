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
        process.env.NODE_ENV === "development"
          ? "http://localhost:3030"
          : "/mapfile-editor",
      items: [],
      shouldFetch: true,
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
      } else if (type === "FETCH_START") {
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
    if (!actions) {
      console.log(actions);
    }
    dispatch({
      type: "FETCH_START",
      payload: {
        shouldFetch: false,
      },
    });
    const root = store.selectFilesAPIRoot();
    let token = store.selectAuthToken();
    fetch(`${root}/api/files`, {
      method: "GET",
      mode: "cors",
      headers: { Authorization: `Bearer ${token}` },
    })
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
};
