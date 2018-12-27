import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'

import Avator from './components/ProFile/Avator.js'

class Home extends Component {
  render() {
    return (
      <div styleName="mainContainer">
        <div styleName="avatorContainer">
          <Avator />
        </div>
        <section styleName="articlesContainer">list</section>
      </div>
    );
  }
}

export default CSSModules(Home, styles)
