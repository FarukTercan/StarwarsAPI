import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Image
            src='https://i.pinimg.com/originals/a1/f5/18/a1f518957c80740830dec55930b16c0e.gif'
            size='small'
          />
          <Menu.Item name='Star Wars API' as='h1' />
        </Container>
      </Menu>
    </div>
  );
}

export default Navbar;
