// manages the contents of the editor via selector
// check contents of file
// key in state an made available to  editor
// when file is click set a key file name, fetch set to false
// bundle.reactX reactor react to changes to the state action turn condition that fired the reactor bc
// it makes an infinite loop
// do open file contents in editor api request
// save and delete do actions in here

export default {
  name: "editor",
  getReducer: () => {
    const initialData = { filename: null, content: null };
    return (state = initialData, { type, payload }) => {
      switch (type) {
        case "EDITOR_SAVE":
        case "EDITOR_UPDATED":
        case "EDITOR_FETCH_SUCCESS":
          return Object.assign({}, state, payload);
        default:
          return state;
      }
    };
  },
  doEditorOpen: (filename) => ({ dispatch, store }) => {
    const root = store.selectFilesAPIRoot();
    fetch(`${root}/api/files/${filename}`)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: "EDITOR_FETCH_SUCCESS",
          payload: {
            filename: filename,
            content: data,
          },
        });
      })
      .catch((error) => {
        console.log(" did not grab file content", error);
      });
  },
  doEditorUpdate: (content) => ({ dispatch, store }) => {
    dispatch({
      type: "EDITOR_UPDATED",
      payload: {
        content: content,
      },
    });
    const root = store.selectFilesAPIRoot();
    fetch(`${root}/api/files/`, {
      method: "PUT",
      body: payload,
    })
      .then((response) => {
        return console.log("Success:"), response.text();
      })
      .catch((error) => {
        console.error(418, error);
      });
  },
  doEditorSave: (filename, content) => ({ dispatch, store }) => {
    dispatch({
      type: "EDITOR_SAVE",
      payload: {
        filename: filename,
        payload: content,
      },
    });
  },
  selectEditorContent: (state) => {
    return state.editor.content;
  },
};
