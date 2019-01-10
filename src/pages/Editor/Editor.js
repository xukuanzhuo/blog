import React, { Component } from 'react'
import { convertFromRaw, EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createLinkTitlePlugin from './linkTitlePlugin.js'

const linkTitlePlugin = createLinkTitlePlugin()

const plugins = [linkTitlePlugin]
class MyEditor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editorState: EditorState.createEmpty()
    }

    this.onChange = (editorState) => this.setState({editorState})
  }

  render() {
    return (
      <div>
        <h1>Editor</h1>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
        />
      </div>
    );
  }
}

export default MyEditor
