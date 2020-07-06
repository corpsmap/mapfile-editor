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
    const initialData = {
      filename: null,
      content: null,
      isSaving: false,
      isEditing: false,
      isDeleting: false,
      isNew: false,
      err: null,
    };
    return (state = initialData, { type, payload }) => {
      switch (type) {
        case "EDITOR_ENABLE_FETCH":
        case "EDITOR_DISABLE_FETCH":
        case "EDITOR_FETCH_TEMPLATE":
        case "EDITOR_DELETE_SUCCESS":
        case "EDITOR_DELETE_ERROR":
        case "EDITOR_SAVE_STARTED":
        case "EDITOR_OPEN":
        case "EDITOR_POST_ERROR":
        case "EDITOR_POST_SUCCESS":
        case "EDITOR_PUT_ERROR":
        case "EDITOR_PUT_SUCCESS":
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
    if (filename) {
      let token = store.selectAuthToken();
      const root = store.selectFilesAPIRoot();
      fetch(`${root}/api/files/${filename}`, {
        method: "GET",
        mode: "cors",
        headers: { Authorization: `Bearer ${token}` },
      })
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
              isNew: false,
            },
          });
        })
        .catch((error) => {
          console.log(" did not grab file content", error);
        });
    } else {
      dispatch({
        type: "EDITOR_OPEN",
        payload: {
          filename: "NewFile.map",
          content: "//Start Here",
          isNew: true,
        },
      });
    }
    store.doUpdateUrl(`/files/${filename}`);
  },
  doEditorOpenTemplate: () => ({ dispatch, store }) => {
    let template = "template.mapx";
    let token = store.selectAuthToken();
    const root = store.selectFilesAPIRoot();
    fetch(`${root}/api/templates/${template}`, {
      method: "GET",
      mode: "cors",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log("template", data);
        dispatch({
          type: "EDITOR_FETCH_TEMPLATE",
          payload: {
            filename: template,
            content: data,
            isNew: true,
          },
        });
      })
      .catch((error) => {
        console.log("template does not exist", error);
      });
    store.doUpdateUrl(`/files/${template}`);
  },
  doEditorUpdate: (filename, content) => ({ dispatch, store }) => {
    dispatch({
      type: "EDITOR_UPDATED",
      payload: {
        filename: filename,
        content: content,
        isEditing: true,
      },
    });
  },
  doToggleDeleteOn: () => ({ dispatch, store }) => {
    dispatch({
      type: "EDITOR_DISABLE_FETCH",
      payload: { isEditing: true, isDeleting: true },
    });
  },
  doToggleDeletOff: () => ({ dispatch, store }) => {
    dispatch({
      type: "EDITOR_ENABLE_FETCH",
      payload: { isEditing: false, isDeleting: false },
    });
  },
  doEditorDelete: (filename) => ({ dispatch, store }) => {
    const root = store.selectFilesAPIRoot();
    let token = store.selectAuthToken();
    // const filename = store.selectEditorFilename();
    fetch(`${root}/api/files/${filename}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ filename }),
    })
      .then((response) => {
        return response.ok;
      })
      .then((ok) => {
        if (ok) {
          dispatch({
            type: "EDITOR_DELETE_SUCCESS",
            payload: {},
          });
        } else {
          dispatch({ type: "EDITOR_DELETE_ERROR", payload: {} });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },

  doEditorPut: (filename) => ({ dispatch, store }) => {
    const root = store.selectFilesAPIRoot();
    const content = store.selectEditorContent();
    const existingFilename = store.selectPathname();
    let token = store.selectAuthToken();
    console.log("put", filename, "existing", existingFilename);
    fetch(`${root}/api${existingFilename}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content, filename }),
    })
      .then((response) => {
        return response.ok;
      })
      .then((ok) => {
        if (ok) {
          console.log("is saving", ok);
          dispatch({
            type: "EDITOR_PUT_SUCCESS",
            payload: { isSaving: false, isEditing: false },
          });
        } else {
          dispatch({
            type: "EDITOR_PUT_ERROR",
            payload: { isEditing: false, isSaving: false, isNew: true },
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
    store.doUpdateUrl(`/files/${filename}`);
  },
  doEditorPost: (filename) => ({ dispatch, store }) => {
    const root = store.selectFilesAPIRoot();
    const content = store.selectEditorContent();
    let token = store.selectAuthToken();
    fetch(`${root}/api/files`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        filename: filename,
        content: content,
      }),
    })
      .then((response) => {
        return response.ok;
      })
      .then((ok) => {
        if (ok) {
          console.log("is saving", ok);
          dispatch({
            type: "EDITOR_POST_SUCCESS",
            payload: { isSaving: false, isEditing: false },
          });
        } else {
          dispatch({
            type: "EDITOR_POST_ERROR",
            payload: { err: true, isSaving: false },
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },

  doEditorSave: (filename) => ({ dispatch, store }) => {
    dispatch({
      type: "EDITOR_SAVE_STARTED",
      payload: { isSaving: true, isEditing: false, err: null },
    });
    // const filename = store.selectEditorFilename();
    console.log("save", filename);
    const isNew = store.selectEditorIsNew();
    if (isNew) {
      store.doEditorPost(filename);
    } else {
      store.doEditorPut(filename);
    }
  },
  selectEditorIsDeleting: (state) => {
    return state.editor.isDeleting;
  },
  selectEditorError: (state) => {
    return state.editor.err;
  },
  selectEditorIsNew: (state) => {
    return state.editor.isNew;
  },
  selectEditorIsSaving: (state) => {
    return state.editor.isSaving;
  },
  selectEditorContent: (state) => {
    return state.editor.content;
  },
  selectEditorFilename: (state) => {
    return state.editor.filename;
  },
  selectEditorIsEditing: (state) => {
    return state.editor.isEditing;
  },
  persistActions: ["EDITOR_ENABLE_FETCH", "EDITOR_DISABLE_FETCH"],
};
