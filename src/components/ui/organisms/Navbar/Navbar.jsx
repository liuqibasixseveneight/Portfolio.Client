import React from 'react';

import { DownloadButton, Navigation } from '@portfolio/ui';
import rizLaytonPdf from '@portfolio/assets/filesToDownload/rizLaytonResume.pdf';
import { StyledNav } from './Navbar.styles';

export default function Navbar() {
  return (
    <StyledNav>
      <div>RIZ</div>

      <Navigation>
        <Navigation.List>
          <Navigation.ListItem>01. About</Navigation.ListItem>
          <Navigation.ListItem>02. Experience</Navigation.ListItem>
          <Navigation.ListItem>03. Projects</Navigation.ListItem>
          <Navigation.ListItem>04. Contact</Navigation.ListItem>

          <DownloadButton
            downloadLabel='rizLaytonResume'
            src={rizLaytonPdf}
            text='Resume'
          />
        </Navigation.List>
      </Navigation>
    </StyledNav>
  );
}
