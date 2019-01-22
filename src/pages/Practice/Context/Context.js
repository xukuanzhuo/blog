import React from 'react'
import {ThemeContext, themes} from './ThemeContext';
import ThemedButton from './ThemedButton';
import ThemeTogglerButton from './ThemeToggleButton'

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class Context extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      console.log('toggle theme trigger')
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme

    // <Provider value={{something: 'something'}}>
    // 避免行内赋值导致每次都渲染组件
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
        <section>
          <ThemedButton >ThemedButton deafultValue</ThemedButton>
        </section>
      </div>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default Context
