import React from 'react'
import { render } from 'react-dom'
import MonacoEditor from 'react-monaco-editor'
import API from '../utils/API'

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      code: '// type your code...'
    }
    this.editorDidMount = this.editorDidMount.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  editorDidMount (editor, monaco) {
    console.log('editorDidMount', editor)
    editor.focus()
  }
  onChange (newValue, e) {
    console.log('onChange', newValue, e)
  }
  render () {
    const code = this.state.code
    const options = {
      selectOnLineNumbers: true
    }
    return (
      <MonacoEditor
        width='800'
        height='600'
        language='javascript'
        theme='vs-dark'
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    )
  }
}

export default Editor
