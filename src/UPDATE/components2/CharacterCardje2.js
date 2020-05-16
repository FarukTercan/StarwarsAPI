import React, { useState } from 'react';
import { Card, Grid } from 'semantic-ui-react';

function CharacterCardje({ character }) {
  //   console.log(character);
  //   const threeCharacters = character.slice(0, 2);
  //   console.log(threeCharacters);
  return (
    <div>
      <ul>
        <li>
          {' '}
          <a>{character.name}</a>{' '}
        </li>
      </ul>
    </div>
  );
}

export default CharacterCardje;
