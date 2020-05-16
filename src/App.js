import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import CharacterList from './components/CharacterList';
import ErrorMessage from './components/ErrorMessage';
import SelectedMovie from './components/SelectedMovie';

function App() {
  const [characters, setCharacters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        // Characters data
        let res = await fetch('https://swapi.dev/api/people/?format=json');
        let characters = await res.json();
        console.log(characters);
        setCharacters(characters.results);

        // Films data
        let resMovie = await fetch('https://swapi.dev/api/films/?format=json');
        let movies = await resMovie.json();
        setMovies(movies.results);

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchCharacters();
  }, []);
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Container>
              <Navbar />
              {error ? (
                <ErrorMessage />
              ) : loading ? (
                <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer>
              ) : (
                <CharacterList characters={characters} />
              )}
            </Container>
          </Route>
          <Route exact path='/:ID'>
            {movies && <SelectedMovie movies={movies} />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
