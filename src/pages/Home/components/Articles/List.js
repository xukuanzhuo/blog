import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './List.css'
import Article from './Article.js'

class ArtilceList extends Component {
  render() {
    return (
      <div>
        <Article />
      </div>
    );
  }
}

export default CSSModules(ArtilceList, styles)
