import React from "react";
import { Link } from "react-router-dom";

function FVCard({ data, onDelete}) {
    return (
        <article>
            <img src={` {}`} alt={''}/>

            <h3>{data.title}</h3>

            <p>
                <Link to={`/detalle/${data.id}`}> Ver detalle</Link>
            </p>
            <button onClick={onDelete}>Eliminar de favoritos</button>
        </article>
    );
}


export default FVCard;