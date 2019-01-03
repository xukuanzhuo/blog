import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import styles from './SocialSites.css'

class SocialSites extends Component {
  render() {
    return (
      <div styleName="socialSitesContainer">
        <a href="https://github.com/xukuanzhuo" target="_blank">github</a>
        <a href="mailto:xukuanzhuo@gmail.com">email</a>
      </div>
    );
  }
}

export default CSSModules(SocialSites, styles)
