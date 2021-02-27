import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import {useRef, useState} from 'react'
import {useAuth} from '../contexts/AuthContext'


const StyledLogin = styled.div`
height: 90%;
width: 80%;
background-color: #fcfcfc;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
padding: 20px;
`
const StyledForm = styled.form`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
align-items: center;
`

const StyledInput = styled.input`
outline: none;
margin: 20px;
height: 40px;
border: none;
width: 90%;
padding: 10px;
`

const Header = styled.h1`
margin: 50px;`

const StyledButton = styled.button`
height: 40px;
width: 90%;
border: none;
margin: 20px;
background-color: green;
color: white;
cursor: pointer;
`



const SignIn = () => {

    const { resetPassword} = useAuth() 
    const emailRef = useRef()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const history = useHistory()


    async function handleResetPassword(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to reset password')
        }
        console.log('clicked')
        
       setLoading(false)
    }   

    return (<>
   
            <StyledLogin>
            <Header>Reset Password</Header>
            <p>{error}</p>
            <StyledForm onSubmit={handleResetPassword}>
       
                <StyledInput ref={emailRef} placeholder='E-mail adress' type="email" />
               
                
                <StyledButton  disabled={loading}>Send password email</StyledButton>
                </StyledForm>
                <Link to='/login'>Login</Link>
                <p>You don't have an account yet? <Link to='/signup'>Sign Up</Link></p>
            </StyledLogin>
        
    </>)
}

export default SignIn