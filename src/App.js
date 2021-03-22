
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

import { createContext, useState } from 'react';
import Notfound from './Components/Notfound/Notfound';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blog from './Components/Blog/Blog';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]= useState({});
  

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p className="btn btn-success m-3">User Name {loggedInUser.name}</p>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/destination/from/:ride">
        <Destination />
        </PrivateRoute>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        {/* <Route path="*">
            <Notfound />
          </Route> */}
      </Switch>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
