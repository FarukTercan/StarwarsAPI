import React, { Fragment } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';
import { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const SearchBar = styled.input`
  width: 100%;
  height: 32px;
  border: 1px solid #eaeaea;
  padding: 5px 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

function CharacterList({ currentCharacters, filterCharacters }) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value.trim());
  };

  const handleClear = () => {
    setSearch('');
    filterCharacters('');
  };

  const handleSubmit = (e) => {
    filterCharacters(search);
  };

  return (
    <div>
      <div className='search-div'>
        <div className='search-close'>
          {search.length > 0 && (
            <Button onClick={handleClear} color='black' size='tiny'>
              <Icon name='close' />
            </Button>
          )}
          <SearchBar
            autoComplete='off'
            type='search'
            name='searchBar'
            id='searchBar'
            value={search}
            placeholder='Search for movie actors'
            onChange={handleChange}
          />
        </div>

        {search.length < 3 ? (
          <Button color='black' disabled onClick={handleSubmit}>
            Search
          </Button>
        ) : (
          <Button color='black' onClick={handleSubmit}>
            Search
          </Button>
        )}
      </div>

      <Grid columns={3} centered>
        {currentCharacters.map((character) => {
          return (
            <Fragment key={character.name}>
              <CharacterCard character={character} />
            </Fragment>
          );
        })}
      </Grid>
    </div>
  );
}

export default CharacterList;
