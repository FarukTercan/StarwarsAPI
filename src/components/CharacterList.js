import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';
import { useState, useEffect } from 'react';

function CharacterList({ characters }) {
  const [search, setSearch] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const filteredData = characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredCharacters(filteredData);
  }, [search]);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='Search for movie actors'
        onChange={handleChangeSearch}
      />

      {search}

      <Grid columns={3} centered>
        {filteredCharacters.map((character) => {
          return (
            <Fragment>
              <CharacterCard character={character} />
            </Fragment>
          );
        })}
      </Grid>
    </div>
  );
}

export default CharacterList;
