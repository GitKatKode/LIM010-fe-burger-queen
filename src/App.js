import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Order from './components/Order';
import Kitchen from './components/Kitchen';
import Register from './components/Register';

const App = () =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/homePage" component={HomePage}></Route>
        <Route exact path="/order" component={Order}></Route>
        <Route exact path="/kitchen" component={Kitchen}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </Router>
  );
}

export default App;
