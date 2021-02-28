import styled from 'styled-components'

import { Link, useHistory } from 'react-router-dom'
import {useRef, useState} from 'react'
import {useAuth} from '../contexts/AuthContext'




const StyledSignup = styled.div`
height: 90%;
width: 80%;
background-color: #fcfcfc;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
padding: 20px;
border-radius: 10px;
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
border-radius: 4px;
background-color: #ebebeb;
z-index: 10;
`

const Header = styled.h1`
margin: 50px;`

const StyledButton = styled.button`
height: 40px;
width: 50%;
border: none;
margin: 20px;
background-color: #6a7e91;
color: white;
border-radius: 15px;
cursor: pointer;
`



const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth()
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords does not match')
        }
            

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)  
            history.push('/')
        } catch {
            setError('Failed to create an account')
        }
        console.log('clicked')
       setLoading(false)
}   

    return (<>
    
      
            <StyledSignup>
            <Header>Skriv in dig här</Header>
           
            <p>{error}</p>
            <StyledForm onSubmit={handleSubmit}>
                    <StyledInput ref={emailRef} placeholder='E-mail' type="email" />
                <StyledInput required ref={passwordRef} placeholder='Lösenord' type="password" />
                <StyledInput required ref={passwordConfirmRef} placeholder='Bekräfta lösenord' type="password" />
                <StyledButton disabled={loading} >Bli medlem</StyledButton>
                </StyledForm>
                
                <p>Redan inskriven? <Link to='/login'>Logga in</Link></p>
            </StyledSignup>
            
    </>)
}

export default SignUp
