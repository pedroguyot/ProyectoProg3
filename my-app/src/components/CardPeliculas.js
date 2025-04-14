import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CardPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPelicula: props.data,
      mostrarDescripcion: false,
    };
  }

  showDescription() {
    this.setState({ mostrarDescripcion: !this.state.mostrarDescripcion });
  }

  agregarFavoritos = () => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let idActual = this.state.dataPelicula.id;
    
    let existe = favoritos.find((id) => id === idActual);

    if (!existe) {
      favoritos.push(idActual)
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      console.log(idActual)
    } else {
      console.log("ya esta guardado")
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
                <button id="boton" onClick={this.agregarFavoritos}>Agregar a favoritos</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default CardPeliculas;
