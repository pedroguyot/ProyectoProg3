import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cargando from './Cargando';
import VerMas from './VerMas';


class PopularesCartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      cargando: true,
      vermas : false, 

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

  botonVerMas = () => {
    this.setState({ vermas: true });
  };

  render() {

    if (this.state.cargando) {
        return (
          <main>
            <Cargando></Cargando>
          </main>
        );
      }
    const { peliculas, vermas } = this.state;
    const MostrarMas = vermas ? peliculas : peliculas.slice(0, 5);

    return (
        <div>
        <h1>Películas Populares</h1>
        {MostrarMas.map((pelicula) => (
          <div key={pelicula.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
              alt={pelicula.title}
            />
            <h3>{pelicula.title}</h3>
            <p>Rating: {pelicula.vote_average}</p>
          </div>
        ))}
        {!vermas && (
          <VerMas onClick={this.botonVerMas} />
        )}
      </div>
    );
  }
}

export default PopularesCartelera;