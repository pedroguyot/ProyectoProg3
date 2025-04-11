import React, { Component } from "react";
import FiltroPelicula from '../../components/FiltroPelicula';
import MasPopulares from '../../components/MasPopulares.js';
import EnCartel from "../../components/EnCartel.js";
import { Link } from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            personajes: []
        }
    }

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
                <p><Link to="/populares" exact="true">Ver todas</Link></p>
                <h3 className="secc">Peliculas mejor calificadas</h3>
                <div id="secciones">
                    <EnCartel />
                </div>
                <p><Link to="/cartelera" exact="true">Ver todas</Link></p>

            </main>
        )
    }
}

export default Home;