import React, { useState } from 'react';
import { Card, Grid, Accordion, Header, Icon } from 'semantic-ui-react';
import CharacterList from './CharacterList';

function MovieCard({ movie, characters, planets, movies }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, { index }) => {
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Grid>
      <Grid.Column>
        <Card color='red'>
          <Card.Content>
            <Card.Header>{movie.title}</Card.Header>
          </Card.Content>
          <Accordion fluid styled>
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={handleClick}
            >
              <Header as='h5' color='red'>
                More info
              </Header>
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <Card color='red'>
                <Card.Content>
                  <Card.Header>{movie.title}</Card.Header>
                  <Card.Description>
                    <strong>Episode {movie.episode_id}</strong>
                    <br />
                    <br />
                    <strong>Actors</strong>
                    <p>{movie.characters[0]}</p>
                    <strong>Story</strong>
                    <p>{movie.opening_crawl}</p>
                    <strong>Release date</strong>
                    <p>{movie.release_date}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Accordion.Content>
          </Accordion>
          <CharacterList characters={characters} />
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default MovieCard;
