import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Avator.css'

// <img styleName="avatorImg" src='https://avatars1.githubusercontent.com/u/10184923?s=460&v=4' alt='avator' />

class Avator extends Component {
  render() {
    return (
      <div styleName="avatorContainer">
        <div styleName="avatorInfo">
          <p styleName="avatorName">KZ Xu</p>
          <p styleName="avatorDesc">stay hungry,stay foolish.</p>
        </div>
      </div>
    );
  }
}

export default CSSModules(Avator, styles)
