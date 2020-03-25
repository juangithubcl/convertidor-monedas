import React from 'react';
import './App.css';
import FechaActual from './components/FechaActual';
import Convertidor from './components/Convertidor'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        monedas: [
            {nombre: 'Peso Chileno', id: 'clp', conv: {
                clp: 1, dolar: 0.0012
            }},
            {nombre: 'Dolar', id: 'dolar', conv: {
                clp: 843.1, dolar: 1
            }},
        ],
        primero: 'clp',
        segundo: 'dolar'
    }
  }
  render(){
      return (
      <div className="container">
          <h1>Convertidor de monedas</h1>
          <FechaActual></FechaActual>
          <Convertidor monedas={this.state.monedas} primero={this.state.primero} segundo={this.state.segundo}></Convertidor>
      </div>)
  }
}

export default App;
