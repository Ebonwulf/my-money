import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
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
