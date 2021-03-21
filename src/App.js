
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Notfound from './Components/Login/Notfound/Notfound';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]= useState({});
  

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="*">
            <Notfound />
          </Route>
      </Switch>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
