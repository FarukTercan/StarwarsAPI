import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';
import { useState } from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
  width: 100%;
  height: 32px;
  border: 1px solid #eaeaea;
  padding: 5px 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;
const SearchButton = styled.button`
  width: 20%;
  height: 32px;
  background-color: black;
  border-radius: 25px;
  color: white;
  border: 1px solid #eaeaea;
  padding: 5px 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

function CharacterList({ currentCharacters, filterCharacters }) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    filterCharacters(search);
  };

  const handleGetAll = (e) => {
    filterCharacters('');
  };

  return (
    <div>
      <div>
        <SearchBar
          autoComplete='off'
          type='text'
          name='searchBar'
          id='searchBar'
          placeholder='Search for movie actors'
          onChange={handleChange}
        />{' '}
        <SearchButton type='submit' onClick={handleSubmit}>
          Search
        </SearchButton>
        <SearchButton type='submit' onClick={handleGetAll}>
          Get All
        </SearchButton>
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
