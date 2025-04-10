import React, { Component } from 'react'

class CardPeliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPelicula: props.data,
            mostrarDescripcion: false
        }
    }

    showDescription() {
        this.setState({mostrarDescripcion: !this.state.mostrarDescripcion})
    }

    render() {
        return (
            <div>
                <article className="productos">
                    <div className="remera-hombre">
                        <div className="remera-img">
                            <a href="" className="ver-mas-imagen">
                                <img className="producto-imagen" src={`https://image.tmdb.org/t/p/w154${this.state.dataPelicula.poster_path}`} alt="Imagen de la pelicula" />
                            </a>
                            <div className="info">
                                <p className="nombre-producto">{this.state.dataPelicula.original_title}</p>
                                
                                <p className='more' onClick={() => this.showDescription()}> {this.state.mostrarDescripcion ? 'Ocultar Descripción' : 'Ver descripción'} </p>

                                <section className={this.state.mostrarDescripcion ? 'show' : 'hide'}>
                                    <p className="descripcion-producto">{this.state.dataPelicula.overview}</p>
                                </section>
                                    
                                <button id="boton">Ir a detalle</button> <br></br>
                                <button id="boton">Agregar a favoritos</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default CardPeliculas;