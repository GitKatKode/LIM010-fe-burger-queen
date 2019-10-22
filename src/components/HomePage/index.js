import React, {Component} from 'react';
import './styles.css';
import { logout } from '../../index';

class HomePage extends Component  {

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.history.push(e.target.value)
  }

  handleLogout = (e) => {
    e.preventDefault();
      logout()
      .then(()=>{
        this.props.history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      })
  }


  render () {
      return(
          <div className= "home-page">
              <div className="form ">
                  <form>
                      <button onClick={this.handleSubmit} value="/register">Registrar Pedido</button>
                      <button onClick={this.handleSubmit} value="/order">Órdenes Listas</button>
                      <button onClick={this.handleSubmit} value="/kitchen">Cocina</button>
                      <button onClick={this.handleLogout}>Salir</button>
                  </form>
              </div>
          </div>
       
      )
  };
        
      };

export default HomePage;