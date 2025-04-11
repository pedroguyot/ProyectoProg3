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
        // PARA VER QUE TERMINA ENVIANDO
        console.log('Se envió el formulario con:', this.state.valorInput);
    }

    controlarInput(evento){
        // PARA VER QUE AGARRA: console.log('Esto es lo que llega por el evento', evento)
        this.setState({valorInput: evento.target.value})
    }

    render() {
        return(
            
           <form onSubmit={(evento) => this.manejarSubmit(evento)}>
                <label>Buscar una pelicula: </label>
                <input onChange={(evento) => this.controlarInput(evento)} value={this.state.valorInput}></input>
                <button type="submit">Buscar</button>
           </form>
            
        )
    }
}

export default FiltroPelicula;