import React, {Component} from 'react';

class FiltroPelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput:'',
        }
    }

    manejarSubmit(evento) {
        evento.preventDefault();
    }

    controlarInput(evento){
        console.log('Esto es lo que llega por el evento', evento)
        this.setState({valorInput: evento.target.value})
    }

    render() {
        return(
            
           <form onSubmit={(evento) => this.manejarSubmit(evento)}>
            <input onChange={(evento) => this.controlarInput(evento)} value={this.state.valorInput}></input>
           </form>
            
        )
    }
}

export default FiltroPelicula;

{/* 
    
class FiltroPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {valor: ''}
    }

    evitarSubmit(event) {
        event.preventDefault(); //Evitamos que se envie el formulario de arranque, y solo cuando querramos.
    }
    
    controlarCambios(event) {
        this.setState({
            valor: event.target.value
        }, () => console.log(event))
    }
    

    render() {
        return(
            
            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <label>Buscar pelicula: </label>
                <input type='text' onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
                <input type='submit' value='Submit' /> 
            </form>
            
        )
    }
}    
    
*/}