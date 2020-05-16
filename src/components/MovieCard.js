import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movies }) {
  const [ID, setID] = useState('');
  const fiveMovies = movies.slice(0, 5);
  return (
    <div>
      {fiveMovies.map((movie) => {
        return (
          <Link to={`/${movie.episode_id}`}>
            <ul
              key={movie.url}
              onClick={() => {
                setID(movie.episode_id);
              }}
            >
              <li>{movie.title}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
}

export default MovieCard;
