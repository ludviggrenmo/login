import styled from 'styled-components'
import { Route, Switch} from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Dashboard from './Dashboard'
/* import img from '../jon-flobrant-GRIEUEaCr5w-unsplash.jpg' */
import { AuthProvider } from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Human from 'humaaans'



const Wrapper = styled.div`
height: 100vh;
width: 100vw;
padding: 20px;
display: flex;
flex-direction: row wrap;
justify-content: center;
align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`

const Aside = styled.div`
width: 50%;
min-width: 400px;
height: 100%;
padding-top: 50px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0 10px 10px 0;

@media (max-width: 768px) {

    width: 100%;
  }
`

const Background = styled(Aside)`
background-color: #293647;
display: flex;
flex-direction: column;
min-width: 400px;
align-items: flex-start;
justify-content: flex-start;
padding: 50px;
border-radius: 10px 0 0 10px;

  h1 {
    color: #dedede;
    margin: 80px 0 30px 0;
    font-size: 3.5rem;
    z-index: 6;
  
    font-family: Geneva, Tahoma, sans-serif;
  }
  h3 {
   z-index: 2;
    color: #dedede;
    margin: 0 0 20px 0;
    z-index: 6;
  }

 
`

const StyledDiv = styled.div`
position: absolute;
left: 28%;
bottom: 0%;

  @media (max-width: 768px) {
    width: 100%;
    top: 0;
    z-index: 4;
  }
`
const RouteDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;

`

function App() {
  return (<>
    <AuthProvider>
    <Wrapper>
        <Background>
          <h1>Psykolog i Stockholm, Södermalm</h1>
          <h3>Välkommen till psykolog Förnamn Efternamn</h3>
          <StyledDiv><Human posture="standing" size={500} direction="right" head="Airy" torso="Hoodie" bottom="Sprint" /></StyledDiv>
      </Background>
        <Aside>
          <RouteDiv>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} />

            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/forgotpassword' component={ForgotPassword} />

            </Switch>
            </RouteDiv>
      </Aside>
    
      </Wrapper>
      </AuthProvider>
  </>);
}

export default App;
