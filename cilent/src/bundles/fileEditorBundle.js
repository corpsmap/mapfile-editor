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
    const initialData = { filename: null, content: null, isSaving: false};
    return (state = initialData, { type, payload }) => {
      switch (type) {
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
    if (filename){
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
        })
      
    } else { dispatch({
          type: "EDITOR_OPEN",
          payload: {
            filename:"",
            content:"",
          }
    })
      
    }
    store.doUpdateUrl("/editor");
  },
  doEditorUpdate: (content) => ({ dispatch, store }) => {
    dispatch({
      type: "EDITOR_UPDATED",
      payload: {
        content: content,
      },
    });
  },
  doEditorPut: () =>({dispatch, store})=>{
    const root = store.selectFilesAPIRoot();
    const content = store.selectEditorContent();
    const filename = store.selectEditorFilename();
    fetch(`${root}/api/files/${filename}`, {
      method: "PUT",
      mode: 'cors',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({content}),
    })
      .then((response) => {
        return response.ok;
      })
      .then((ok)=>{
        if (ok ){
          console.log("is saving", ok)
          dispatch({
            type: "EDITOR_PUT_SUCCESS",
            payload: {isSaving: false}
        })} else {
          dispatch({
            type: "EDITOR_PUT_ERROR",
          })
        }
      })
      .catch((error) => {
        console.error(error);
      });
    },
    doEditorPost: (filename) =>({dispatch, store})=>{
      const root = store.selectFilesAPIRoot();
      const content = store.selectEditorContent();
      fetch(`${root}/api/files`, {
        method: "POST",
        mode: 'cors',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({ 
          filename: filename,
          content:content,
              }),
            })
        .then((response) => {
          return response.ok;
        })
        .then((ok)=>{
          if (ok ){
            console.log("is saving", ok)
            dispatch({
              type: "EDITOR_POST_SUCCESS",
              payload: {isSaving: false}
          })} else {
            dispatch({
              type: "EDITOR_POST_ERROR",
            })
          }
        })
        .catch((error) => {
          console.error(error);
        });
      },
      
  doEditorSave: () => ({ dispatch, store }) => {
    dispatch({
      type: "EDITOR_SAVE_STARTED",
      payload:{ isSaving : true,
      }
    })
    const filename = store.selectEditorFilename();
    if (filename === ""){
      const newfilemame = window.prompt("Please enter the filename");
      store.doEditorPost(newfilemame);

    } else {
      store.doEditorPut()
    }
   
  },
  selectEditorIsSaving:(state)=>{
    return state.editor.isSaving;
  },
  selectEditorContent: (state) => {
    return state.editor.content;
  },
  selectEditorFilename: (state)=>{
    return state.editor.filename;
  }
};
