import React, {Component} from 'react';
import { connect } from 'react-redux';
import './styles.css';

class Register extends Component  {

    state = {
        breakfast:'',
        menu:''
      }

    handleButtons = (e) => {
        e.preventDefault();
        this.props.history.push(e.target.id);
    }

    handleOrder = (e) => {
        e.preventDefault();

    }

  render () {
      return(
         
        <div className= "register">
        <div className="form-register">
        <form className="menu">
        <button className="btn" id="/cafeam" onClick={this.handleOrder}>Café americano</button>
        <button className="btn" id="/cafecl" onClick={this.handleOrder}>Café con leche</button>
        <button className="btn" id="sandjq" onClick={this.handleOrder}>Sandwich de jamón y queso </button>
        <button className="btn" id="/jugfn" onClick={this.handleOrder}>Jugo de frutas natural </button>
           {/* <output>
              Café 
              <span>S/5.00</span>
              <Checkbox/>
           </output>
           <output>
               Café con leche
               <span>S/5.00</span>
              <Checkbox/>
           </output>
           <output>
               Sandwich
               <span>S/5.00</span>
              <Checkbox/>
           </output>
            <output>
                Jugo de fruta
                <span>S/5.00</span>
              <Checkbox/>
            </output> */}
            </form>
            <form className="menu">
                <button className="btn" id="/burger" onClick={this.handleButtons}>Hamburguesas</button>
                <button className="btn" id="/sides" onClick={this.handleButtons}>Acompañamientos</button>
                <button className="btn" id="/drinks" onClick={this.handleButtons}>Bebidas</button>
            </form>
            <div className="client">
                <output>
                    Cliente:{" "}{this.props.client}
                </output>
                <output>
                    Mesa:{" "}{this.props.table}
                </output>
            </div>
        </div>
    </div>
       
      )
  };
        
      };

      const mapStateToProps = (state) => {
        return {
          table: state.table,
          client: state.client
        }
      }
      
      export default connect(mapStateToProps)(Register);