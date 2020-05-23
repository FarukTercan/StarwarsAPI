import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Dimmer, Loader } from 'semantic-ui-react';
import ErrorMessage from './ErrorMessage';
import cachedFetch from './../cachedFetch';

function MovieList({ movies }) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const allResponses = await Promise.all(
          movies.map((url) => cachedFetch(url))
        );
        setFilms(allResponses);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    fetchMovies();
  }, [movies]);

  return (
    <div>
      {error ? (
        <ErrorMessage />
      ) : loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <MovieCard movies={films} />
      )}
    </div>
  );
}

export default MovieList;
