import React, {Component} from 'react';

class Burger extends Component  {
  state = {
    pushed : []

  }

  render () {
      return(
       <div>
           <ul>
            <li>
            <button>CARNE</button>
            </li>
            <li>
            <button>POLLO</button>
            </li>
            <li>
            <button>VEGETARIANA</button>
            </li>
           </ul>
       </div>
      )
  };
        
      };

export default Burger;