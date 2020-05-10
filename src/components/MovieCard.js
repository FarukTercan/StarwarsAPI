import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

function MovieCard({ data }) {
  return (
    <div>
      <h1>Movie List</h1>
      <Grid columns={3}>
        {data.map((movies, item) => {
          return (
            <Grid.Column key={item}>
              <Card>
                <Card.Content>
                  <Card.Header>{movies.title}</Card.Header>
                  <Card.Description>
                    <strong>Episode</strong>
                    <p>{movies.episode_id}</p>
                    <strong>Story</strong>
                    <p>{movies.opening_crawl}</p>
                    <strong>Release date</strong>
                    <p>{movies.release_date}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </div>
  );
}

export default MovieCard;
