import React, {Component} from 'react';

class Resultado extends Component {
    constructor(props){
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,
            resultados: []
        }
    }

    componentDidMpunt() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=2e0ef69342c52cb11393cc8472403ddb`)
        .then(resp => resp.json())
        .then(data => this.setState({resultados: data.results}))
        .catch(err => console.log(err))
    }


    render() {
        return(
            <div>
                Resultados de: {this.state.busqueda}
            <section>
                {this.state.resultados.map(elm => <h1>{elm.original_title}</h1>)}
            </section>
            </div>
            
        )
    }
}

export default Resultado;
