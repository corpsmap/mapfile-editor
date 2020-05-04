import React, { useState, useEffect } from 'react'
import Monaco from '../components/Editor'
import API from '../utils/API'

function Mapfile () {
  const [mapfile, setMapfile] = useState([])
  const [mapfileObject, setMapFileObject] = useState({})
}

useEffect(() => {
  loadMapfile()
}, [])

function loadMapfile () {
  API.getTemplate()
    .then(res => setMapFile(res.data))
    .catch(err => console.log(err))
}

function Editor (props) {
  return (
    <div>
      <h1>Editor Page</h1>
      <Monaco />
    </div>
  )
}

export default Editor
