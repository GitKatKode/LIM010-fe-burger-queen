import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import Order from './Components/Order';
import Kitchen from './Components/Kitchen';
import Register from './Components/Register';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      client: '',
      table: '',
    };
    this.setClient = this.setClient.bind(this);
    this.setTable = this.setTable.bind(this);
  }
  setClient(client) {
    this.setState({ client })
  }

  setTable(table) {
    this.setState({ table })
  }

  render() {
    const { client, table } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/homePage" component={(props) => <HomePage 
          client={client} table={table} setClient={this.setClient} setTable={this.setTable} history={props.history}/>}></Route>
          <Route exact path="/order" component={Order}></Route>
          <Route exact path="/kitchen" component={Kitchen}></Route>
          <Route exact path="/register" component={(props) => <Register
          client={client} table={table} history={props.history}/> }></Route>
        </Switch>
      </Router>
    ); 
  }
}

export default App;
