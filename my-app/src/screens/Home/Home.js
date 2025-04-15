import React, { Component } from "react";
import FiltroPelicula from '../../components/FiltroPelicula';
import MasPopulares from '../../components/MasPopulares.js';
import EnCartel from "../../components/EnCartel.js";
import Buscador from "../../components/Buscador/Buscador.js";
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
                    <h3 className="saludo">Peliculas</h3>
                </div>
                <div className="buscador">
                    <Buscador history={this.props.history} />
                </div>

                <section className="seccionPeliculas">
                    <h3 className="tituloSeccion">Peliculas más populares</h3>
                    <div id="secciones">
                        <MasPopulares />
                    </div>
                    <button className='botonVerMas'><Link to="/populares" exact="true">Ver todas</Link></button>
                </section>
                
                <div className="lineaHome"></div>

                 <section className="seccionPeliculas">
                    <h3 className="tituloSeccion">Peliculas mejor calificadas</h3>
                    <div id="secciones">
                        <EnCartel />
                    </div>
                    <button className='botonVerMas'><Link to="/cartelera" exact="true">Ver todas</Link></button>
                </section>



            </main>
        )
    }
}

export default Home;