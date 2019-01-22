// during rendering、lifecycle methods and in constructors of the whole tree
// 无法捕获： 事件处理  异步代码(setTimeout or requestAnimationFrame), ssr, ErrorBoundaries itself

import React from 'react'

function logErrorToMyService(error, info) {
  console.log(error)
  console.log(info)
}

// define ErrorBoundary component
// only class component can become ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// use
// <ErrorBoundary>
//   <MyWidget />
// </ErrorBoundary>
