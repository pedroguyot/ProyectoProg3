import React, { Component } from 'react'
import PeliculaDetalle from '../../components/PeliculaDetalle'
import Cargando from '../../components/Cargando'

export default class Resultados extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,
            resultados: [],
            cargando: true,
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=16165a70d46ac6b42f11100b26969ebb`)
            .then(resp => resp.json())
            .then(data => this.setState({ resultados: data.results, cargando: false }))
            .catch(err => console.log(err))
    }

    render() {
        if (this.state.cargando) {
            return (
                <main>
                    <Cargando></Cargando>
                </main>
            )
        }
        return (
            <div>
                Resultados de: {this.state.busqueda}
                <section>
                    {this.state.resultados.map((pelicula, idx) => (
                        <PeliculaDetalle key={idx} movie={pelicula} />
                    ))}
                </section>

            </div>
        )
    }
}