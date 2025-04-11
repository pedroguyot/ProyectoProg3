import React, { Component } from "react";
import FiltroPelicula from '../../components/FiltroPelicula';
import MasPopulares from '../../components/MasPopulares.js';
import EnCartel from "../../components/EnCartel.js";

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            personajes: []
        }
    }

    //componentDidMount() TRAER DATA DE LA API




    render() {
        return (
            <main>
                <div>
                    <h3 className="saludo">Bienvenido</h3>
                </div>
                <FiltroPelicula />
                <div>

                    <h2 className="ult_nov">Peliculas</h2>

                </div>

                <h3 className="secc">Peliculas más populares</h3>
                <div id="secciones">
                    <MasPopulares />
                </div>
                <h3 className="secc">Peliculas en cartelera</h3>
                <div id="secciones">
                    <EnCartel />
                </div>

            </main>
        )
    }
}

export default Home;