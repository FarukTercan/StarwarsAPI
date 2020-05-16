import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import MovieCard from './MovieCard';
import CharacterList from './CharacterList';

function MovieList({ movies }) {
  return (
    <div>
      <h1>Movie List</h1>
      <Grid columns={3}>
        {movies.map((movie) => {
          return (
            <Fragment key={movie.url}>
              <MovieCard movie={movie} characters={movie.characters} />
              {/* <CharacterList characters={movie.characters} /> */}
            </Fragment>
          );
        })}
      </Grid>
    </div>
  );
}

export default MovieList;
