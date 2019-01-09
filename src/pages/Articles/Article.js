import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Article.css'
import { getBlogIssue } from 'src/api/issues.js'
import showdown from 'showdown'

const convert = new showdown.Converter()

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
        <article>
          <header>
            <h1 styleName="articleHeaderTitle">{ issue.title }</h1>
            <div styleName="articleHeaderInfos">
              <span>{ issue.user.login }</span>
              <span> { issue.updatedAt }</span>
            </div>
          </header>
          <section styleName="articleSubContent" dangerouslySetInnerHTML={{ __html: convert.makeHtml(issue.body) }}>
          </section>
        </article>
      </div>
    )
  }
}

export default CSSModules(Article, styles)
