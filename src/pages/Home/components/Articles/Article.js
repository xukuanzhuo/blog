import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Article.css'

class Article extends Component {
  render() {
    return (
      <div>
        article
      </div>
    );
  }
}

export default CSSModules(Article, styles)
