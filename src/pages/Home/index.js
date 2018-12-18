import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'

class Home extends Component {
  render() {
    return (
      <div styleName="mainContainer">
        <div styleName="avatorContainer">avator</div>
        <section styleName="articlesContainer">list</section>
      </div>
    );
  }
}

export default CSSModules(Home, styles)
