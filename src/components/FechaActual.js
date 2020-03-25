import React from 'react';

class FechaActual extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fechaActual: this.fechaActual()
        }
    }
    fechaActual(){
        return new Date(Date.now()).toLocaleString().split(',')[0]
    }

    render(){
        return (
        <div className="fecha-actual">
            <p>{this.state.fechaActual}</p>
        </div>)
    }
}

export default FechaActual;