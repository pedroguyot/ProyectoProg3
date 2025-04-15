import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cargando from './Cargando';
import VerMas from './VerMas';


class CarteleraTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      cargando: true,
      MostrarMas: 5, 

    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=2e0ef69342c52cb11393cc8472403ddb&')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          peliculas: data.results,
          cargando: false,
        });
      })
      .catch(() => {
        this.setState({ cargando: false });
      });
  }

  MostrarMasPeliculas = () => {
    this.setState((prevState) => ({
      MostrarMas: prevState.MostrarMas + 5,
    }));
  };

  render() {
    if (this.state.cargando) {
      return (
        <main>
          <Cargando></Cargando>
        </main>
      );}
    const { peliculas, MostrarMas } = this.state;

    return (
      <div className="seccionPeliculas">
        <h1>Películas Populares</h1>

        <div id='seccionParticular'>
        {peliculas.map((pelicula, index) => {
          if (index < MostrarMas) {
            return (
              <div key={pelicula.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
                  alt={pelicula.title}
                />
                <h3>{pelicula.title}</h3>
                <p>Rating: {pelicula.vote_average}</p>
              </div>
            );
          }
          return null;
        })}
        </div>

        {MostrarMas < peliculas.length && (
          <VerMas onClick={this.MostrarMasPeliculas} />
        )}
      </div>
    );
  }
}

export default CarteleraTop;
