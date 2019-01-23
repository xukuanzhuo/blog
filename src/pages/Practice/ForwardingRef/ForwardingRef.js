import React from 'react'
import { FancyButton } from './FancyButton.js'

class ForWardingRef extends React.Component {
  constructor(props) {
    super(props)
  }

  showRefNood () {
    console.log('clicked')
    console.log(this.ref.current)
  }

  render () {
    // You can now get a ref directly to the DOM button:
    const ref = React.createRef()
    return (
      <FancyButton ref={ref} onClick={this.showRefNood}>Click me!</FancyButton>
    )
  }
}

export default ForWardingRef
