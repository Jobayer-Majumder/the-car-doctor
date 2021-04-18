import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './Components/Admin/Admin/Admin';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path='/admin/:id'>
            <Admin />
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <h1>page note found</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
