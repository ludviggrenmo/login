import {useState} from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'


const Container = styled.div`
height: 90%;
width: 80%;
background-color: #fcfcfc;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
padding: 20px;
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



const Dashboard = () => {

    const { currentUser, logout } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    

    async function handleLogOut(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
        console.log('clicked')
        
       setLoading(false)
    } 

    return (
        <Container>
            <Header>Welcome!
         </Header>
        
            <p>{currentUser && currentUser.email}</p>
            <Link to='/update-profile'>Handle Profile</Link>
            <StyledButton disabled={loading} onClick={handleLogOut} >Sign out</StyledButton>
            <p>{error}</p>
           
        </Container>
    )
}

export default Dashboard
