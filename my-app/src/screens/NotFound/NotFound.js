import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"

function NotFound (){
    return (
        <div>
            <h2> Error 404 </h2>
            <p> La pagina que estas buscando no existe </p>

            <Link to="/">Volver al inicio</Link>
        </div>
    )
}

export default NotFound;