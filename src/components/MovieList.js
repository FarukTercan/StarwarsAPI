import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Card, Dimmer, Loader } from 'semantic-ui-react';
import ErrorMessage from './ErrorMessage';

function MovieList({ movies }) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const allResponses = await Promise.all(
          movies.map((url) => fetch(url).then((res) => res.json()))
        );
        setFilms(allResponses);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      {error ? (
        <ErrorMessage />
      ) : loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <Card>
          <Card.Header>Movies</Card.Header>
          <MovieCard movies={films} />
        </Card>
      )}
    </div>
  );
}

export default MovieList;
