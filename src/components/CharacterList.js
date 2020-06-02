import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
  width: 100%;
  height: 32px;
  border: 1px solid #eaeaea;
  padding: 5px 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

function CharacterList({ dataCharacters, characters }) {
  const [search, setSearch] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const filteredData = characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase());
    });

    if (filteredData) setFilteredCharacters(filteredData);
  }, [search, dataCharacters, characters]);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchBar
        type='text'
        name='searchBar'
        id='searchBar'
        placeholder='Search for movie actors'
        onChange={handleChangeSearch}
      />

      <Grid columns={3} centered>
        {filteredCharacters.map((character) => {
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
