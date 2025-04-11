import React, { Component } from 'react';

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }

    controlarForm(evento){
        evento.preventDefault()
        this.props.history.push('/resultado/' + this.state.input) //REEDIRIJO CON HISTORY
    }

    controlarInput(evento){
        this.setState({input: evento.target.value})
    }

    render() {
        return(
            <form
                onSubmit={(evento) => this.controlarForm(evento)}
            >
                <label>Buscar una película: </label>
                <input placeholder='Buscador' value={this.state.input} onChange={(evento) => this.controlarInput(evento)}/>
                <button type='submit'>Buscar</button>
            </form>
        )
    }
}

export default Buscador;