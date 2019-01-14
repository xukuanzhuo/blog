import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Avator.css'

class Avator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { user } = this.props

    return (
      <div styleName="avatorContainer">
        <img styleName="avatorImg" src={ user.avatarUrl } alt='avator' />
        <div styleName="avatorInfo">
          <p styleName="avatorName">{ user.name }</p>
          <p styleName="avatorDesc">stay hungry,stay foolish.</p>
        </div>
      </div>
    );
  }
}

export default CSSModules(Avator, styles)
