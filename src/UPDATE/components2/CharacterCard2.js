import React, { useState, Fragment } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import CharacterCardje from './CharacterCardje';

function CharacterCard({ characters }) {
  const threeCharacters = characters.slice(0, 3);
  return (
    <div>
      {threeCharacters.map((character) => {
        return (
          <Fragment key={character.url}>
            <CharacterCardje character={character} />
          </Fragment>
        );
      })}
    </div>
  );
}

export default CharacterCard;
