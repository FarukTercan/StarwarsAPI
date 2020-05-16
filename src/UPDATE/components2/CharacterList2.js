import React, { useState, useEffect, Fragment } from 'react';
import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const allResponses = await Promise.all(
          characters.map((url) => fetch(url).then((res) => res.json()))
        );
        setPeople(allResponses);
        // console.log(allResponses[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <div>
      <h5>Actor List</h5>
      <CharacterCard characters={people} />
    </div>
  );
}

export default CharacterList;
