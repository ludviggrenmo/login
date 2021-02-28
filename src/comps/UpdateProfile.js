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



const UpdateProfile = () => {

    const [showPassword, setShowPassword] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords does not match')
        }

        const promises = []
        setLoading(true)
        setError('')
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(err => setError('Failed to update account')).finally(() => {
            setLoading(false)
        })
        console.log('clicked')
       setLoading(false)
}   

    return (<>
    
      
            <StyledSignup>
            <Header>Uppdatera profil</Header>
           
            <p>{error}</p>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="password">Vill du byta lösenord?</label>
                <StyledButton onClick={(e) => {
                    e.preventDefault()
                    setShowPassword(!showPassword)
                }}>Update password</StyledButton>
                {showPassword && <><StyledInput ref={passwordRef} placeholder='New password' type="password" />
                <StyledInput ref={passwordConfirmRef} placeholder='New password' type="password" />
                </>}
                                <label htmlFor="email">Change email:</label>

                <StyledInput required defaultValue={currentUser.email} ref={emailRef} placeholder='E-mail adress' type="email" />
                <StyledButton disabled={loading} >Update</StyledButton>
                </StyledForm>
                
                <p><Link to='/'>Cancel</Link></p>
            </StyledSignup>
            
    </>)
}

export default UpdateProfile
