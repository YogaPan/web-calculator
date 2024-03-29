import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    /* eslint-disable no-console */
    console.error(
      `[Component Error] ${error.toString()}, ${errorInfo.componentStack}`
    )
  }

  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>

    return this.props.children
  }
}

export default ErrorBoundary
