import 'babel-polyfill'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import Skeleton from 'react-loading-skeleton'
import { getBlogIssues } from 'src/api/issues.js'
import styles from './List.css'
import Article from './Article.js'

function IssueSkeleton () {
  return (
    <div className={styles.articleSkeleton}>
      <Skeleton count={ 1 } height={ 30 } />
      <div className={styles.articleSkeletonContent}>
        <Skeleton count={ 4 }  />
      </div>
    </div>
  )
}

function IssueList (props) {
  const { issues, loading } = props
  const issueItems = issues.map((issue) =>
    <Link to={ `/articles/${issue.number}` } key={ issue.number } >
      <Article issue={ issue } />
    </Link>
  )

  return (
    <ul>{ loading ? <IssueSkeleton /> : issueItems }</ul>
  )
}

class ArtilceList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      issues: [],
      loading: false
    }
  }

  async getIssues () {
    return await getBlogIssues()
  }

  componentDidMount () {
    this.setState({ loading: true })
    this.getIssues().then((issues) => {
      this.setState({ issues, loading: false })
    }).catch(() => {
      this.setState({ loading: false })
    })
  }

  render() {
    return (
      <div>
        <IssueList issues={ this.state.issues } loading={ this.state.loading } />
      </div>
    );
  }
}

export default CSSModules(ArtilceList, styles)
