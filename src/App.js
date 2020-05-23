import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import CharacterList from './components/CharacterList';
import ErrorMessage from './components/ErrorMessage';
import SelectedMovie from './components/SelectedMovie';
import cachedFetch from './cachedFetch';

function App() {
  const [characters, setCharacters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        // Characters data
        let charactersMain = [];

        let characters = await cachedFetch(
          'https://swapi.dev/api/people/?format=json'
        );

        charactersMain = [...characters.results];

        while (characters.next !== null) {
          characters = await cachedFetch(characters.next);
          charactersMain = [...charactersMain, ...characters.results];
        }

        setCharacters(charactersMain);

        // Films data
        let movies = await cachedFetch(
          'https://swapi.dev/api/films/?format=json'
        );
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
          <Container>
            <Navbar />
            <Route exact path='/'>
              {error ? (
                <ErrorMessage />
              ) : loading ? (
                <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer>
              ) : (
                <CharacterList characters={characters} />
              )}
            </Route>
            <Route exact path='/:ID'>
              {movies && <SelectedMovie movies={movies} />}
            </Route>
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
