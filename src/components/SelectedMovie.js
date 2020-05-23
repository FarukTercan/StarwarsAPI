import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Container, Button, Icon } from 'semantic-ui-react';

function SelectedMovie({ movies }) {
  const { ID } = useParams();

  const movieProfile = movies.find(
    (movie) => movie.episode_id === parseInt(ID)
  );
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
              <strong>Episode:</strong> {episode_id}
              <br />
              <br />
              <strong>Director:</strong> {director}
              <br />
              <br />
              {opening_crawl}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <strong>Release Date {release_date}</strong>
          </Card.Content>
        </Card>

        <div className='btn'>
          <Link to='/'>
            <Button color='black'>
              <Icon name='left arrow' />
              Back to actor search
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default SelectedMovie;
