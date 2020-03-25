import React from 'react';
import './Convertidor.css';

class Convertidor extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            monedaOrigen: 0,
            monedaDestino: 0,
            primero: this.props.primero,
            segundo: this.props.segundo
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        if(name === 'sel-primero'){
            this.setState({
                primero: valor
            }, () => this.convertir());
        } else if (name === 'sel-segundo') {
            this.setState({
                segundo: valor
            }, () => this.convertir());
        } else if (name === 'txt-primero') {
            this.setState({monedaOrigen: valor}, () => this.convertir())
        } else if (name === 'txt-segundo') {
            this.setState({monedaDestino: valor}, () => this.convertir(false))
        } 
    }

    convertir(ordenado = true){
        if(ordenado){
            const moneda = this.props.monedas.find(m => m.id === this.state.primero)
            const factor = moneda.conv[this.state.segundo]
            this.setState({
                monedaDestino: (this.state.monedaOrigen * factor)
            })
        } else {
            const moneda = this.props.monedas.find(m => m.id === this.state.segundo)
            const factor = moneda.conv[this.state.primero]
            this.setState({
                monedaOrigen: (this.state.monedaDestino * factor)
            })
        }
    }

    render(){
        return (
        <div className="grid-container">
            <div className="grid-item">
                <input type="number" name="txt-primero" value={this.state.monedaOrigen} onChange={this.handleChange} className="txt-moneda" placeholder="Ingrese un valor"/>
            </div>
            <div className="grid-item">
                <select className="sel-moneda" name="sel-primero" value={this.state.primero} onChange={this.handleChange}>
                    {this.props.monedas.map((m)=>{
                        return <option key={m.id} value={m.id}>{m.nombre}</option>
                    })}
                </select>
            </div>
            <div className="grid-item">
                <input type="number" name="txt-segundo" value={this.state.monedaDestino} onChange={this.handleChange} className="txt-moneda" placeholder="Ingrese un valor"/>
            </div>
            <div className="grid-item">
                <select className="sel-moneda" name="sel-segundo" value={this.state.segundo} onChange={this.handleChange}>
                    {this.props.monedas.map((m)=>{
                        return <option key={m.id} value={m.id}>{m.nombre}</option>
                    })}
                </select>
            </div>
        </div>)
    }
}

export default Convertidor;