import React, { useState } from 'react'
import { signInWithGoogle } from '../../api/firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { auth, createUserProfileDocument } from './../../api/firebase/firebase.utils'
import './sign-up.styles.css'
import { log as Logger } from './../../utils/logger.js'

const SignUpPage = () => {
    const [formState, setFormState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = formState

    const handleSubmit = async event => {
        event.preventDefault()

        if(password !== confirmPassword) {
            alert("passwords do not match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })
            
            setFormState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }, () => Logger(this.state))

        } catch(error) {
            console.error(error)
        }
    }

    const handleChange = event => {
        const { name, value } = event.currentTarget

        setFormState({
            ...formState,
            [name]: value
        })
    }
        
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email amd password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="displayName" value={displayName} handleChange={handleChange}
                    label="Display Name" type="text" required/>
                <FormInput name="email" value={email} handleChange={handleChange}
                    label="Email" type="email" required/>
                <FormInput name="password" type="password" value={password} handleChange={handleChange} 
                    label="Password" required/>
                <FormInput name="confirmPassword" type="password" value={confirmPassword} handleChange={handleChange} 
                    label="Confirm Password" required/>
                <div className="buttons">
                    <CustomButton type="submit">Sign Up</CustomButton>
                    <CustomButton isGoogleSignIn type="button" onClick={signInWithGoogle}>Sign Up with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignUpPage