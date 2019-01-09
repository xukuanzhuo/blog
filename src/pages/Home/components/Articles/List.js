import 'babel-polyfill'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { getBlogIssues } from 'src/api/issues.js'
import styles from './List.css'
import Article from './Article.js'

function IssueList (props) {
  const issues = props.issues
  const issueItems = issues.map((issue) =>
    <Article issue={ issue } key={ issue.number }/>
  )

  return (
    <ul>{issueItems}</ul>
  )
}

class ArtilceList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      issues: []
    }
  }

  async getIssues () {
    return await getBlogIssues()
  }

  componentDidMount () {
    this.getIssues().then((issues) => {
      this.setState({ issues })
    })
  }

  render() {
    return (
      <div>
        <IssueList issues={ this.state.issues } />
      </div>
    );
  }
}

export default CSSModules(ArtilceList, styles)
