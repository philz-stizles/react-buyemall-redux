import React, { Component } from 'react'
import { signInWithGoogle } from '../../api/firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { auth, createUserProfileDocument } from './../../api/firebase/firebase.utils'
import './sign-up.styles.css'

class SignUpPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state
        if(password !== confirmPassword) {
            alert("password dont match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })
            
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }, () => console.log(this.state))

        } catch(error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.currentTarget

        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email amd password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" value={displayName} handleChange={this.handleChange}
                        label="Display Name" type="text" required/>
                    <FormInput name="email" value={email} handleChange={this.handleChange}
                        label="Email" type="email" required/>
                    <FormInput name="password" type="password" value={password} handleChange={this.handleChange} 
                        label="Password" required/>
                    <FormInput name="confirmPassword" type="password" value={confirmPassword} handleChange={this.handleChange} 
                        label="Confirm Password" required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign Up</CustomButton>
                        <CustomButton isGoogleSignIn type="button" onClick={signInWithGoogle}>Sign Up with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpPage