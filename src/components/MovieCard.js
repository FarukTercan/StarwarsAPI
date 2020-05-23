import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movies }) {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <Link to={`/${movie.episode_id} `} key={movie.url}>
            <ul>
              <li>{movie.title}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
}

export default MovieCard;
