import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavTabs from './NavTabs'
import Login from './pages/Login'
import Editor from './pages/Editor'
import Mapview from './pages/Mapview'
import './App.css'
import ParticlesDom from './Particles'
import { connect } from 'redux-bundler-react'

function App () {
  return (
    <div>
      <ParticlesDom />
      <Router>
        <NavTabs />

        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/mapview' component={Mapview} />
        <Route path='/editor' component={Editor} />
      </Router>
    </div>
  )
}

export default connect('selectRoute', App)
