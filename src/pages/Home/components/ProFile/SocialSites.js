import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import styles from './SocialSites.css'

class SocialSites extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { user } = this.props
    return (
      <div styleName="socialSitesContainer">
        <a href={ user.htmlUrl } target="_blank">github</a>
        <a href={ `mailto:${user.email}`}>email</a>
      </div>
    );
  }
}

export default CSSModules(SocialSites, styles)
