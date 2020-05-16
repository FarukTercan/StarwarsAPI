import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      // Films data
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let movies = await res.json();

      setMovies(movies.results);

      setLoading(false);
    }
    fetchMovies();
  }, []);
  // console.log({ movies });
  return (
    <div className='App'>
      <Navbar />
      <Container>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <MovieList movies={movies} />
        )}
      </Container>
    </div>
  );
}

export default App;
