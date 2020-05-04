import { createRouteBundle } from 'redux-bundler'
//pages
import Editor from '../pages/Editor'
import Login from '../pages/Login'
import Mapview from '../pages/Mapview'

export default createRouteBundle({
  '/': Login,
  '/login': Login,
  '/mapview': Mapview,
  '/editor': Editor
})
