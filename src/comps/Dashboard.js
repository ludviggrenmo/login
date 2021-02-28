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
border-radius: 10px;

p{
    margin: 30px;
}
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
            <Header>Välkommen
         </Header>
        
            <p>{currentUser && currentUser.email}</p>
            <Link to='/update-profile'>Hantera profil</Link>
            <StyledButton disabled={loading} onClick={handleLogOut} >Logga ut</StyledButton>
            <p>{error}</p>
           
        </Container>
    )
}

export default Dashboard
