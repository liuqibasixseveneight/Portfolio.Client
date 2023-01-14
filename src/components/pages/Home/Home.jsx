import React from 'react';

import { Introduction, Wrapper } from './Home.styles';
import { IFrame } from '@portfolio/ui';

export default function Home() {
  return (
    <Wrapper>
      <div style={{ display: 'flex', flex: '1' }} />
      <Introduction>
        <div
          style={{
            padding: '0 2rem',
          }}
        >
          <span style={{ fontSize: '2rem' }}>Hey, my name is</span>
          <h1 style={{ fontSize: '8rem' }}>Riz.</h1>
          <h2 style={{ fontSize: '6rem' }}>I'm a Frontend Developer.</h2>
        </div>
      </Introduction>

      <IFrame
        src='https://my.spline.design/macropad-deb82047ccd4793de1829af15d44f11b/'
        width='100%'
        height='100%'
        title='Navigation macropad'
      />
    </Wrapper>
  );
}
