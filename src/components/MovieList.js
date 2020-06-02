import React from 'react';
import { Link } from 'react-router-dom';

//

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <Link to={`/${movie.episodeId}`} key={movie.episodeId}>
            <ul>
              <li>{movie.title}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
}

export default MovieList;
