import { useState } from "react"

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


import {SignUpContainer, Heading} from './sign-up-form.styles'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password === confirmPassword) {
            try {
                const { user } = await createAuthUserWithEmailAndPassword(
                    email,
                    password
                );

                await createUserDocumentFromAuth({ ...user, displayName });
                setFormFields(defaultFormFields);
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Cannot create user, Email already in use')
                } else {
                    console.log("user creation encountered an error", error)
                }
            }
        } else {
            alert("Your passwords do not match");
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignUpContainer>
            <Heading>Don't have an account?</Heading>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm