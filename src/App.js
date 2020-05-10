import React, { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';
import { Container, Dimmer, Loader } from 'semantic-ui-react';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setMovies(data.results);
      setLoading(false);
    }
    fetchMovies();
  }, []);
  console.log({ movies });
  return (
    <div className='App'>
      <Navbar />
      <Container>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <MovieCard data={movies} />
        )}
      </Container>
    </div>
  );
}

export default App;
