import React from 'react';

function PeliculaDetalle({ movie }) {
    if (!movie) return <p>Cargando...</p>
  return (
    <div className='seccionPeliculaDetalle'>
      <div >
      <h2>{movie.title}</h2>
      <img className='imagenDetalle'
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
        <p>Rating: {movie.vote_average}</p>
        <p>Fecha de estreno: {movie.release_date}</p>
        <p>Duración: {movie.runtime} minutos</p>
        <p>Sinopsis: {movie.overview}</p>
        <p>Géneros: {movie.genres ? movie.genres.map(genre => genre.name).join(', ') : 'No disponible'}</p>
        <button>Agregar a favoritos</button>
    </div>
    </div>
  );
}

export default PeliculaDetalle;