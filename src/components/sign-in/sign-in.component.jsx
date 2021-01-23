import React, { useState } from 'react'
import { signInWithGoogle } from '../../api/firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { auth } from './../../api/firebase/firebase.utils'
import './sign-in.styles.css'
import { log as Logger } from './../../utils/logger.js'

const SignInPage = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formState

    const handleSubmit = async event => {
        event.preventDefault()

        try {
            await auth.signInWithEmailAndPassword(email, password)
            
            setFormState({
                email: '',
                password: ''
            }, () => Logger(this.state))

        } catch(error) {
            console.error(error)
        }
    }

    const handleChange = event => {
        const { name, value } = event.currentTarget

        this.setFormState({
            ...formState,
            [name]: value
        })
    }

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email amd password</span>

            <form onSubmit={handleSubmit}>
                <FormInput id="email" name="email" value={email} handleChange={handleChange}
                    label="Email" type="email" required/>
                <FormInput id="password" name="password" type="password" value={password} handleChange={handleChange} 
                    label="Password" required/>
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignInPage