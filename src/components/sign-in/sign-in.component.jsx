import React, { Component } from 'react'
import { signInWithGoogle } from '../../api/firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { auth } from './../../api/firebase/firebase.utils'
import './sign-in.styles.css'

class SignInPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            
            this.setState({
                email: '',
                password: ''
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
        const { email, password } = this.state

        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email amd password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={email} handleChange={this.handleChange}
                        label="Email" type="email" required/>
                    <FormInput name="password" type="password" value={password} handleChange={this.handleChange} 
                        label="Password" required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn type="button" onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInPage