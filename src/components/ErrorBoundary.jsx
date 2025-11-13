import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Unhandled error in app:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <p>Try refreshing the page. If the problem continues, contact support.</p>
          <button onClick={() => this.setState({ hasError: false })}>Try again</button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
