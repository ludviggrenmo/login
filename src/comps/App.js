import styled from 'styled-components'
import { Route, Switch} from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Dashboard from './Dashboard'
import img from '../jon-flobrant-GRIEUEaCr5w-unsplash.jpg'
import { AuthProvider } from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'



const Wrapper = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
`

const Aside = styled.div`
width: 50%;
height: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`

const Background = styled(Aside)`
background-image: url(${img});
background-size: cover;
`


function App() {
  return (<>
    <AuthProvider>
    <Wrapper>
      <Background image={img}></Background>
        <Aside>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} />

            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/forgotpassword' component={ForgotPassword} />

          </Switch>
      </Aside>
    
      </Wrapper>
      </AuthProvider>
  </>);
}

export default App;
