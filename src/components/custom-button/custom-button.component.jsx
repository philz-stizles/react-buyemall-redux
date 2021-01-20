import React from 'react'
import './custom-button.styles.css'

const CustomButton = ({children, isGoogleSignIn, inverted, ...rest}) => {
    return (
        <button className={`${(inverted ? 'inverted' : '')} ${(isGoogleSignIn ? 'google-sign-in' : '')} custom-button`} {...rest}>{children}</button>
    )
}

export default CustomButton
