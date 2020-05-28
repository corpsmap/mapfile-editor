// import React, { createContext, useReducer, useContext } from 'react'
// import {
//   SET_CURRENT_CODE,
//   REMOVE_CODE,
//   UPDATE_CODE,
//   ADD_CODE,
//   SET_CURRENT_FILE,
//   ADD_FILES,
//   UPDATE_FILES,
//   REMOVE_FILES,
//   LOADING
// } from './actions'

// const StoreContext = createContext()
// const { Provider } = StoreContext

// const reducer = (state, action) => {
//   switch (action.type) {
//     case SET_CURRENT_CODE:
//       return {
//         ...state,
//         currentCode: action.code,
//         loading: false
//       }

//     case UPDATE_CODE:
//       return {
//         ...state,
//         code: [...action.code],
//         loading: false
//       }

//     case ADD_CODE:
//       return {
//         ...state,
//         code: [action.code, ...state.code],
//         loading: false
//       }

//     case REMOVE_CODE:
//       return {
//         ...state,
//         posts: state.code.filter(code => {
//           return code._id !== action._id
//         })
//       }
//     case SET_CURRENT_FILE:
//       return {
//         ...state,
//         currentCode: action.files,
//         loading: false
//       }

//     case ADD_FILES:
//       return {
//         ...state,
//         files: [action.code, ...state.files],
//         loading: false
//       }

//     case UPDATE_FILES:
//       return {
//         ...state,
//         files: [...state.files],
//         loading: false
//       }

//     case REMOVE_FILES:
//       return {
//         ...state,
//         files: state.files.filter(code => {
//           return code._id !== action._id
//         })
//       }

//     case LOADING:
//       return {
//         ...state,
//         loading: true
//       }

//     default:
//       return state
//   }
// }

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     code: [],
//     currentCode: {
//       _id: 0,
//       filename: '',
//       body: '',
//       author: ''
//     },
//     files: [],
//     currentFile: {
//       filename: '',
//       size: '',
//       last_modified: Date,
//       created: Date,
//       url: ''
//     },
//     loading: false
//   })

//   return <Provider value={[state, dispatch]} {...props} />
// }

// const useStoreContext = () => {
//   return useContext(StoreContext)
// }

// export { StoreProvider, useStoreContext }
