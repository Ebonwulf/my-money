import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        {/*The switch is needed around the routes to prevent them all showing on the page at once */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
