import React, { Component } from "react";
import { Link } from "react-router-dom"; //importo Link pra usar las rutas internas sin recargar la pagina

class Header extends Component {

    render() {
        return (
            <header>
                <h1> Vaqueritos Peliculas </h1>

                <nav>
                    <ul>
                        <li><Link to="/" exact="true">Home</Link></li>
                        <li><Link to="/favoritos" >Favoritos</Link></li>
                        <li><Link to="/populares" >Peliculas Populares</Link></li>
                        <li><Link to="/cartelera" >Peliculas en Cartelera</Link></li>
                    </ul>
                </nav>
            </header>
        )

    }
}

export default Header;