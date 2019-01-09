import React, { Component } from 'react'
import { markdown } from 'markdown'
import CSSModules from 'react-css-modules'
import styles from './Article.css'

class Article extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const issue = this.props.issue

    return (
      <article styleName="articleContainer">
        <header>
          <h1 styleName="articleHeaderTitle">{ issue.title }</h1>
        </header>
        <section styleName="articleSubContent" dangerouslySetInnerHTML={{ __html: markdown.toHTML(issue.body) }}>
        </section>
        <div styleName="articleFooter">
          <span>{ issue.user.login }</span>
          <span> { issue.updatedAt }</span>
        </div>
      </article>
    )
  }
}

export default CSSModules(Article, styles)
