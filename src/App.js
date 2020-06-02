import React, { useState, Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import SelectedMovie from './components/SelectedMovie';
import Pagination from './components/Pagination';
import ErrorMessage from './components/ErrorMessage';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css';

const STAR_WARS_CHARACTERS = gql`
  {
    allPersons {
      name
      birthYear
      height
      gender
      films {
        title
        episodeId
      }
    }
    allFilms {
      title
      episodeId
      openingCrawl
      director
      releaseDate
    }
  }
`;

function App() {
  const {
    loading: loadingCharacters,
    error: errorCharacters,
    data: dataCharacters
  } = useQuery(STAR_WARS_CHARACTERS);

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);

  useEffect(() => {
    if (dataCharacters) setCharacters(dataCharacters.allPersons);
  }, [dataCharacters]);

  // Get current characters for Pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCharacters = characters.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterCharacters = (value) => {
    const filteredData = dataCharacters.allPersons.filter((character) => {
      return character.name.toLowerCase().includes(value.toLowerCase());
    });

    setCharacters(filteredData);
  };

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Fragment>
            <Container>
              <Navbar />
              <Route exact path='/'>
                {errorCharacters ? (
                  <ErrorMessage />
                ) : loadingCharacters ? (
                  <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                  </Dimmer>
                ) : (
                  <Fragment>
                    {dataCharacters && currentCharacters && (
                      <CharacterList
                        currentCharacters={currentCharacters}
                        filterCharacters={filterCharacters}
                      />
                    )}
                    {dataCharacters && (
                      <Pagination
                        cardsPerPage={cardsPerPage}
                        totalCards={characters.length}
                        paginate={paginate}
                      />
                    )}
                  </Fragment>
                )}
              </Route>
              <Route exact path='/:ID'>
                {dataCharacters && (
                  <SelectedMovie movies={dataCharacters.allFilms} />
                )}
              </Route>
            </Container>
          </Fragment>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
