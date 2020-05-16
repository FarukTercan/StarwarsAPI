import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

function Navbar() {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item name='Star Wars API' />
        </Container>
      </Menu>
    </div>
  );
}

export default Navbar;
