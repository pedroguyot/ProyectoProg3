import React, { Component } from "react";
import { Link } from "react-router-dom"; //importo Link pra usar las rutas internas sin recargar la pagina
import "../App.css";

class Header extends Component {
  render() {
        return (
            <header id="barra_nav">
                <h1> Vaqueros Peliculas </h1>

        <nav>
          <ul id="menu">
            <li>
              <Link to="/" exact="true">
                Home
              </Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/populares">Peliculas Populares</Link>
            </li>
            <li>
              <Link to="/cartelera">
                Peliculas mejor calificadas
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
