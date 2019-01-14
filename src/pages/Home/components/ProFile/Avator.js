import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Avator.css'
import Skeleton from 'react-loading-skeleton'

class Avator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { user } = this.props

    return (
      <div styleName="avatorContainer">
        {
          user.avatarUrl ?
          <img styleName="avatorImg" src={ user.avatarUrl } alt='avator' /> :
          <Skeleton width={ 120 } height={ 120 } />
        }

        <div styleName="avatorInfo">
          { user.name ? <p styleName="avatorName">{ user.name }</p> : <Skeleton count={ 1 } /> }
          <p styleName="avatorDesc">stay hungry,stay foolish.</p>
        </div>
      </div>
    );
  }
}

export default CSSModules(Avator, styles)
