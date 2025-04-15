import React, { Component } from 'react';
import PopularesCartelera from '../../components/PopularesCartelera';
import Cargando from '../../components/Cargando';

class Populares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      cargando: true,
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=2e0ef69342c52cb11393cc8472403ddb&')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peliculas: data.results,
          cargando: false,
        });
      })
      .catch((error) => {
        console.error('Error al obtener las películas:', error);
        this.setState({ cargando: false });
      });
  }

  render() {
    if (this.state.cargando) {
      return (
        <main>
          <Cargando />
        </main>
      );
    }
  
    return (
      <div className='seccionPeliculas'>
      <div className='seccion'>
      {this.state.peliculas.length > 0 ? (
        this.state.peliculas.map((elem, indx) => {
          if (indx < 1) {
            return <PopularesCartelera data={elem} key={indx} />;
          }
          return null;
        })
      ) : (
        <p>No se encontraron películas.</p>
      )}
      </div>
      </div>
    );
  };
};

export default Populares;
