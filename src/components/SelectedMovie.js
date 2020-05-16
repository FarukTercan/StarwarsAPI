import React from 'react';
import { Link, useParams } from 'react-router-dom';

function SelectedMovie({ movies }) {
  const { ID } = useParams();

  const movieProfile = movies.find((movie) => movie.episode_id == ID);
  const { title } = movieProfile;

  return (
    <div className='selected-div'>
      {movies && (
        <div className='user-profile'>
          <h1>Selected Movie</h1>
          <ul>
            <li>{title} </li>
          </ul>
        </div>
      )}
      <div className='btn'>
        <Link to='/'>
          <button>Back to actor search</button>
        </Link>
      </div>
    </div>
  );
}

export default SelectedMovie;
