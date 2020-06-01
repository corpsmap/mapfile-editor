// import { createSelector } from 'redux-bundler';
const actions = {
  FETCH_SUCESS: "FETCH_SUCCESS",
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
      } else {
        // always return state or the app will hang up
        return state;
      }
    };
  },
  doFilesFetch: () => ({ dispatch, store }) => {
    const root = store.selectFilesAPIRoot();
    fetch(`${root}/api/files`)
      .then((response) => {
        console.log("heres the response", response);
        return response.json();
      })
      .then((data) => {
        console.log("the json response", data);
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
  init: (store) => {
    store.doFilesFetch();
  },
};
