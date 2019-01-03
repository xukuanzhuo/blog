import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'

import NavBar from './components/ProFile/NavBar.js'
import Avator from './components/ProFile/Avator.js'
import SocialSites from './components/ProFile/SocialSites.js'
import ArtilceList from './components/Articles/List.js'

class Home extends Component {
  render() {
    return (
      <div styleName="mainContainer">
        <div styleName="avatorContainer">
          <Avator />
          <NavBar />
          <SocialSites />
        </div>
        <section styleName="articlesContainer">
          <ArtilceList />
        </section>
      </div>
    );
  }
}

export default CSSModules(Home, styles)
