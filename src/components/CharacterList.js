import React, { Fragment } from 'react';
import { Grid, Segment, Divider } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';
import MovieList from './MovieList';

function CharacterList({ characters }) {
  return (
    <div>
      <Segment>
        <Grid columns={2}>
          {characters.map((character) => {
            return (
              <Fragment key={character.url}>
                <Segment>
                  <Grid columns={2}>
                    <Grid.Column>
                      <CharacterCard character={character} />
                    </Grid.Column>
                    <Grid.Column>
                      <MovieList movies={character.films} />
                    </Grid.Column>
                  </Grid>
                  <Divider vertical></Divider>
                </Segment>
              </Fragment>
            );
          })}
        </Grid>
      </Segment>
    </div>
  );
}

export default CharacterList;
