import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Container, Button } from 'semantic-ui-react';

function SelectedMovie({ movies }) {
  const { ID } = useParams();

  const movieProfile = movies.find((movie) => movie.episode_id == ID);
  const {
    title,
    episode_id,
    opening_crawl,
    director,
    release_date
  } = movieProfile;

  return (
    <div className='selected-div'>
      <Container>
        <Card color='red'>
          <Card.Content>
            <br />

            <Card.Header>{title}</Card.Header>

            <Card.Description>
              <strong>Episode {episode_id}</strong>
              <br />
              <br />
              <strong>Director {director}</strong>
              <br />
              <br />
              <strong>{opening_crawl}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <strong>Release Date {release_date}</strong>
          </Card.Content>
        </Card>

        <div className='btn'>
          <Link to='/'>
            <Button color='black'>Back to actor search</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default SelectedMovie;
