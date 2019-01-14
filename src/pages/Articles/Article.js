import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Article.css'
import { getBlogIssue } from 'src/api/issues.js'
import showdown from 'showdown'
import Skeleton from 'react-loading-skeleton'

const convert = new showdown.Converter()

function ArticleSkeleton () {
  return (
    <article>
      <header>
        <Skeleton height={ 30 } />
        <Skeleton width={ 200 } />
      </header>
      <Skeleton count={ 5 } />
    </article>
  )
}

class Article extends Component {
  constructor (props) {
    super(props)

    this.state = {
      issue: {
        body: '',
        user: {}
      }
    }
  }

  componentDidMount () {
    this.getIssue(this.props.match.params.id).then((issue) => {
      this.setState({ issue })
    })
  }

  async getIssue (number) {
    return await getBlogIssue(number)
  }

  render() {
    const issue = this.state.issue

    return (
      <div styleName="articlePage">
        { issue.title ?
          <article>
            <header>
              <h1 styleName="articleHeaderTitle">{ issue.title  }</h1>
              <div styleName="articleHeaderInfos">
                <span>{ issue.user.login }</span>
                <span> { issue.updatedAt }</span>
              </div>
            </header>
            <section styleName="articleSubContent" dangerouslySetInnerHTML={{ __html: convert.makeHtml(issue.body) }} />
          </article>
          : <ArticleSkeleton />
        }
      </div>
    )
  }
}

export default CSSModules(Article, styles)
