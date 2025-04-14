import React, { Component } from "react";
import CardPeliculas from '../../components/CardPeliculas';



class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculasFavs: [],
            hayElementosEnFavs: false
        };
    }

    componentDidMount() {
        const storageFavoritos = localStorage.getItem('favoritos');

        if (storageFavoritos !== null) {
            let favoritosParsedo = JSON.parse(storageFavoritos);

            if (favoritosParsedo.length > 0) {
                Promise.all( //No entra en el oral
                    favoritosParsedo.map((elm) =>
                        fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=2e0ef69342c52cb11393cc8472403ddb`)
                            .then((resp) => resp.json())
                            .catch(e => console.log(e))
                    )
                )
                    .then((data) =>
                        this.setState({
                            peloiculasFavs: data,
                            hayElementosEnFavs: true
                        })
                    )
                    .catch(e => console.log(e))

                 console.log("favsParseadArray", favoritosParsedo)
            }
        }
    }

    //Funcion para eliminar una pelicula del localStorage y del estado
    eliminarDeFavoritas = (id) => {
        let favoritos = JSON.parse(localStorage.getItem("favoritos"));
        let favoritosActualizados = favoritos.filter((elm) => elm !== id);
        localStorage.setItem("favoritos", JSON.stringify(favoritosActualizados));

        this.setState({
            peliculasFavs: this.state.peliculasFavs.filter((peli) => peli.id !== id),
        });
    };

    render() {
        return (
            <div>
            {
                this.state.peliculasFavs.length > 0 
                ?
                this.state.peliculasFavs.map((elm, idx)=> 
                    <CardPeliculas 
                        data={elm} 
                        key={idx + elm.name} 
                        borrarFavs={(id)=> this.eliminarDeFavoritas(id)} 
                    />)
                :
                this.state.hayElementosEnFavs === false ? 
                    <h1>El carrito esta vacio</h1>
                :
                <h1>
                    Cargando Carrito
                </h1>
            }
        </div>
            
            
            
            /*<div>
                
                {this.state.peliculasFavs.length > 0 ? (
                    this.state.peliculasFavs.map((elm, idx) => (
                        <CardPeliculas key={idx + elm.id} data={elm} />
                    ))
                ) : (
                    <h2>No tenés películas en favoritos</h2>
                )}
            </div> */
        );
    }
}


export default Favoritos;