import React, { Component } from "react";
import PeliculaDetalle from '../../components/PeliculaDetalle';


class Detalle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movie: null,
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
      const { movie } = this.state;
  
      return (
        <div>
          <PeliculaDetalle movie={movie} />
 
        </div>
      );
    }
  }
  
  export default Detalle;