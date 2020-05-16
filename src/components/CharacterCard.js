import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import MovieList from './MovieList';

function CharacterCard({ character, movies }) {
  return (
    <Grid>
      <Grid.Column>
        <Card color='red' style={{ height: '25rem' }}>
          <Card.Content>
            <Card.Header>{character.name}</Card.Header>

            <Card.Description>
              <strong>Born in {character.birth_year}</strong>
              <br />
              <strong>Height {character.height}</strong>
              <br />
              <strong>{character.gender}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <MovieList movies={character.films} />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default CharacterCard;
