import React from 'react'
import SignInPage from '../../components/sign-in/sign-in.component'
import SignUpPage from '../../components/sign-up/sign-up.component'
import './auth.styles.css'

const AuthPage = () => {
    return (
        <div className="auth">
            <SignInPage />
            <SignUpPage />
        </div>
    )
}

export default AuthPage