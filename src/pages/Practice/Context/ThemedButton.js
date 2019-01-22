import React from 'react'
import {ThemeContext} from './ThemeContext'

class ThemedButton extends React.Component {
  render() {
    let props = this.props
    const { theme, toggleTheme } = this.context
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext

export default ThemedButton
