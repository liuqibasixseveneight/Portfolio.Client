import React from 'react';

import { Button } from '@portfolio/ui';
import { Nav, Wrapper } from './Navbar.styles';

export default function Navbar() {
  return (
    <Wrapper>
      <div>RIZ</div>

      <Nav>
        <ul>
          <li>01. About</li>
          <li>02. Experience</li>
          <li>03. Projects</li>
          <li>04. Contact</li>

          <Button text='Resume' />
        </ul>
      </Nav>
    </Wrapper>
  );
}
