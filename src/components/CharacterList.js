import React, { Fragment } from 'react';
import { Grid, Segment, Divider } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';
import MovieList from './MovieList';

function CharacterList({ characters }) {
  return (
    <div>
      <Grid columns={3} centered>
        {characters.map((character) => {
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
