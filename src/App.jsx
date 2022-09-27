import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

const App = () => {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <NavBar />
          {/*The switch is needed around the routes to prevent them all showing on the page at once */}
          <Switch>
            {/*using Redirect protects pages from being accessed based on whether there is a logged in user or not and redirects then to the appropriate page */}
            <Route exact path='/'>
              {!user && <Redirect to='/login' />}
              {user && <Home />}
            </Route>
            <Route path='/login'>
              {user && <Redirect to='/' />}
              {!user && <Login />}
            </Route>
            <Route path='/signup'>
              {user && <Redirect to='/' />}
              {!user && <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
