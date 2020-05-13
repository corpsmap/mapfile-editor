import React from 'react'
import ReactDOM from 'react-dom'

import createStore from './bundles'
import { Provider } from 'redux-bundler-react'

import App from './App'
const store = (window.store = createStore())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
