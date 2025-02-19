import React from 'react';

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

// Import AceEditor Component

import AceEditor from "react-ace";

// Import a Mode (language)
import 'brace/mode/java';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/terminal';
import 'brace/theme/github';

export default class Editor extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { open: true }
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue) {
    console.log('change', newValue);
  }

  render() {
    return (
      <div className={`editor-container ${this.state.open ? '' : 'collapsed'}`}>
        <div className="editor-title">
          {this.props.displayName}

        </div>
        <AceEditor
          mode={this.props.language}
          theme={this.props.checked ? "terminal" : "github"}
          className="code-mirror-wrapper"
          onChange={this.props.onChange}
          name="UNIQUE_ID_OF_DIV"
          value={this.props.value}
          defaultValue=''
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            highlightActiveLine: true
          }}
        />,
      </div>
    );
  }
}
