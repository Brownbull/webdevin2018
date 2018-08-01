import React, { Component } from 'react'

class ErrorBoundry extends Component{
  constructor(props){
    super(props)
    this.state = {
      hasError : false
    }
  } // eof constructor(props)

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>
    }
    return this.props.children
  } // eof render()
} // eof class ErrorBoundry extends Component

export default ErrorBoundry