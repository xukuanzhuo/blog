import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'
import { getUser } from 'src/api/user.js'

import NavBar from './components/ProFile/NavBar.js'
import Avator from './components/ProFile/Avator.js'
import SocialSites from './components/ProFile/SocialSites.js'
import ArtilceList from './components/Articles/List.js'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {}
    }
  }

  async getUser (userName) {
    return await getUser(userName)
  }

  componentDidMount () {
    this.getUser('xukuanzhuo').then((user) => {
      this.setState({ user })
    })
  }

  render() {
    return (
      <div styleName="mainContainer">
        <div styleName="avatorContainer">
          <Avator user={ this.state.user } />
          <NavBar />
          <SocialSites user={ this.state.user } />
        </div>
        <section styleName="articlesContainer">
          <ArtilceList />
        </section>
      </div>
    );
  }
}

export default CSSModules(Home, styles)
