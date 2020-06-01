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
  }, [search, characters]);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchStyle = {
    width: '100%',
    height: '32px',
    border: '1px solid #eaeaea',
    padding: '5px 10px',
    fontSize: '16px',
    marginBottom: '10px'
  };

  return (
    <div>
      <input
        type='text'
        name='searchBar'
        id='searchBar'
        placeholder='Search for movie actors'
        onChange={handleChangeSearch}
        style={searchStyle}
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