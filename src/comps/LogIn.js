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
margin: 50px;
z-index: 6;`

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



const SignIn = () => {

    const { signin, currentUser } = useAuth() 
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const history = useHistory()


    async function handleLogin(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to login')
        }
        console.log('clicked')
        
       setLoading(false)
    }   

    return (<>
   
            <StyledLogin>
            <Header>Logga in</Header>
            <p>{currentUser && currentUser.email}</p>
            <p>{error}</p>
            <StyledForm onSubmit={handleLogin}>
       
                <StyledInput ref={emailRef} placeholder='E-mail' type="email" />
                <StyledInput ref={passwordRef} placeholder='Lösenord' type="password" />
                
                <StyledButton disabled={loading}>Logga in</StyledButton>
                </StyledForm>
            <Link to='/forgotpassword'>Glömt lösenord?</Link>
                <p>Ej inskriven? <Link to='/signup'>Klicka här</Link></p>
            </StyledLogin>
        
    </>)
}

export default SignIn