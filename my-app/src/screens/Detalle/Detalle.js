import React, { Component } from "react";
import PeliculaDetalle from '../../components/PeliculaDetalle';
import Cargando from '../../components/Cargando';


class Detalle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movie: null,
        cargando: true,

      };
    }
  
    componentDidMount() {
      const { id } = this.props.match.params;
      
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e0ef69342c52cb11393cc8472403ddb`)
        .then(res => res.json())
        .then(data => {
          this.setState({ movie: data });
        });
    }
  
    render() {
        if (this.state.cargando) {
            return (
                <>  
                <main>
                    <Cargando></Cargando>
                </main>
                </>
            );
        };
      const { movie } = this.state;
  
      return (
        <div>
          <PeliculaDetalle movie={movie} />
 
        </div>
      );
    }
  }
  
  export default Detalle;