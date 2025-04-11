import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FiltroPelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: '',
      peliculas: [],
      peliculaEncontrada: null,
      mensajeError: ''
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=2e0ef69342c52cb11393cc8472403ddb&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200')
      .then(res => res.json())
      .then(data => this.setState({ peliculas: data.results }))
      .catch(error => console.log(error));
  }

  controlarInput = (evento) => {
    this.setState({
      valorInput: evento.target.value,
      mensajeError: '',
      peliculaEncontrada: null
    });
  }

  manejarSubmit = (evento) => {
    evento.preventDefault();
    const valorBuscado = this.state.valorInput.toLowerCase();
    const coincidencias = this.state.peliculas.filter(pelicula => pelicula.title.toLowerCase() === valorBuscado);

    if (coincidencias.length > 0) {
      const pelicula = coincidencias[0];
      localStorage.setItem('pelicula', JSON.stringify(pelicula));
      this.setState({
        peliculaEncontrada: pelicula,
        mensajeError: ''
      });
    } else {
      this.setState({
        peliculaEncontrada: null,
        mensajeError: 'No se encontró la película, revisá el título exacto.'
      });
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.manejarSubmit}>
          <label>Buscar una película: </label>
          <input
            onChange={this.controlarInput}
            value={this.state.valorInput}
          />
          <button type="submit">Buscar</button>
        </form>

        {this.state.mensajeError && <p>{this.state.mensajeError}</p>}

        {this.state.peliculaEncontrada && (
          <Link to={`/detalle/${this.state.peliculaEncontrada.id}`}>Ir al detalle</Link>
        )}
      </>
    );
  }
}

export default FiltroPelicula;
