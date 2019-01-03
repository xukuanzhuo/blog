import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import styles from './NavBar.css'

// <img styleName="avatorImg" src='https://avatars1.githubusercontent.com/u/10184923?s=460&v=4' alt='avator' />

class NavBar extends Component {
  render() {
    return (
      <div styleName="navBarContainer">
        <ul styleName="navBarList">
          <li><Link to="/">首页</Link></li>
        </ul>
      </div>
    );
  }
}

export default CSSModules(NavBar, styles)
