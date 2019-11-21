import React, {Component} from 'react';
import './styles.css';
import { logout } from '../../firebase';
import { connect } from 'react-redux';
import selectTable from '../../Actions/table';
import selectClient from '../../Actions/client';
import Popup from "reactjs-popup";

class HomePage extends Component {
  state = {
    client:'',
    table:''
  }

  handleSubmit = (e) =>{
    e.preventDefault();
      this.props.history.push(e.target.id)
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
    const { client, table } = this.props;
      return(
          <div className= "home-page">
              <div className="form ">
                  <form>
                  {/* <Popup trigger={<button type="button">Registrar Pedido</button>} position="center center">
                  <div>
                    <input type="text" placeholder="nombre del cliente" id="SetClient" 
                      onChange={(e) => this.setState({client : e.target.value})}/>
                    <input type="text" placeholder="número de mesa" id="SetTable" 
                    onChange={(e) => this.setState({table: e.target.value})}/>
                    <button onClick={(e)=>{setClient(this.state.client);setTable(this.state.table);this.handleSubmit(e)}} id="/register" >OK</button>
                  </div>
                  </Popup> */}
                  <Popup trigger={<button type="button">Registrar Pedido</button>} position="center center">
                  <div>
                    <input type="text" placeholder="nombre del cliente" id="SetClient" 
                      onChange={(e) => this.setState({client : e.target.value})}/>
                    <input type="text" placeholder="número de mesa" id="SetTable" 
                    onChange={(e) => this.setState({table: e.target.value})}/>
                    <button onClick={(e)=>{client(this.state.client);table(this.state.table);this.handleSubmit(e)}} id="/register" >OK</button>
                  </div>
                  </Popup>
                      <button onClick={this.handleSubmit} id="/order">Órdenes Listas</button>
                      <button onClick={this.handleSubmit} id="/kitchen">Cocina</button>
                      <button onClick={this.handleLogout}>Salir</button>

                  </form>
              </div>
          </div>
       
      )
  };
        
      };

const matchDispatchToProps = (dispatch) => {  
  return {
      table: (index) => {dispatch(selectTable(index))},
      client: (index) => {dispatch(selectClient(index))}
  }
}

export default connect(null, matchDispatchToProps)(HomePage);