import React, { Component } from "react";
import CardPeliculas from './CardPeliculas'

class MasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=2e0ef69342c52cb11393cc8472403ddb&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
            .then((response) => response.json())
            .then((data) => this.setState({ peliculas: data.results }))
            .catch((error) => console.log(error))

    }


    render() {
        return (
                this.state.peliculas.length === 0 ?
                <h4>Cargando peliculas...</h4>
                :
                this.state.peliculas.map((elem, indx) => {
                    if (indx < 5) {
                        return <CardPeliculas data={elem} key={indx} />
                    }
                }))

    }
}

export default MasPopulares;
