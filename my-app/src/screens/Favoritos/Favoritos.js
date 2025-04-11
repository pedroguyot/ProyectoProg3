import React, { Component } from "react";


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
                        fetch('' + elm)
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

                // console.log("favsParseadArray", favoritosParsedo)
            }
        }
    }

    //Funcion para eliminar una pelicula del localStorage y del estado
    eliminarDeFavoritas = (id) => {
        let favoritos = JSON.parse(localStorage.getItem("favoritos"));
        let favoritosActualizadas = favoritos.filter((elm) => elm !== id);
        {/*localStorage.setItem("favoritos", JSON.stringify(favoritosActualiza))*/}
    }
    render() {
        return (
            <div >
                {/*{
                     
                    this.state.peloiculasFavs.length > 0
                        ?
                        this.state.peloiculasFavs.map(elm, idx) =>
                 <FVCard data={elm} key={idx + elm.name} />)//hay q hacer el card 
                : 
                <h2>Favs</h2>
                }*/}

            </div>
        )

    }
}


export default Favoritos;