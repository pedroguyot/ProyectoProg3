import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CardPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPelicula: props.data,
      mostrarDescripcion: false,
      favorito: false,
    };
  }

  showDescription() {
    this.setState({ mostrarDescripcion: !this.state.mostrarDescripcion });
  }

  componentDidMount(){
    let storage= localStorage.getItem('favoritos')
    if(storage !== null){
      let storageParseado = JSON.parse(storage)
      let estaMiId = storageParseado.includes(this.state.dataPelicula.id)

      if(estaMiId){
        this.setState({favorito: true})
      }
    }
  }

  agregarFavoritos(id){
    let storage = localStorage.getItem('favoritos')
    if(storage !== null){
      let arrParseado = JSON.parse(storage)
      arrParseado.push(id)
      let arrStringificado = JSON.stringify(arrParseado)
      localStorage.setItem('favoritos', arrStringificado)
    } else {
      let primerID = [id]
      let arrStringificado = JSON.stringify(primerID)
      localStorage.setItem('favoritos', arrStringificado)
    }

    this.setState({
      favorito: true
    })
  }

  quitarFavoritos(id){
    const storage = localStorage.getItem('favoritos')
    const storageParseado = JSON.parse(storage)
    const filtrarStorage = storageParseado.filter((elm) => elm !== id )
    const storageStringificado = JSON.stringify(filtrarStorage)
    localStorage.setItem('favoritos', storageStringificado)
    this.setState({
      favorito: false
    })

    if(this.props.quitarFavoritos !== undefined){
      this.props.quitarFavoritos(id)
    }

  }

  render() {
    return (
      <div>
        <article className="productos">
          <div className="remera-hombre">
            <div className="remera-img">
              <a href="" className="ver-mas-imagen">
                <img
                  className="producto-imagen"
                  src={`https://image.tmdb.org/t/p/w154${this.state.dataPelicula.poster_path}`}
                  alt="Imagen de la pelicula"
                />
              </a>
              <div className="info">
                <p className="nombre-producto">
                  {this.state.dataPelicula.original_title}
                </p>

                <p className="more" onClick={() => this.showDescription()}>
                  {" "}
                  {this.state.mostrarDescripcion
                    ? "Ocultar Descripción"
                    : "Ver descripción"}{" "}
                </p>

                <section
                  className={this.state.mostrarDescripcion ? "show" : "hide"}
                >
                  <p className="descripcion-producto">
                    {this.state.dataPelicula.overview}
                  </p>
                </section>

                <Link to={`/detalle/${this.state.dataPelicula.id}`}>
                  <button id="boton">Ir a detalle</button>
                </Link>
                {
                  this.state.favorito ?
                    <button onClick={() => this.quitarFavoritos(this.state.dataPelicula.id)}>Sacar de favoritos</button>
                    :
                    <button onClick={() => this.agregarFavoritos(this.state.dataPelicula.id)}>Agregar a favoritos</button>
                }
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default CardPeliculas;
