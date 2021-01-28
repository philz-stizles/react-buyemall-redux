import React, { Component } from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Process the error
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props

        if(hasError) return (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl="https://i.imgur.com/oCkEbrA.png"/>
                <ErrorImageText>Sorry this page is broken</ErrorImageText>
            </ErrorImageOverlay>
        )

        return children
    }
}


export default ErrorBoundary