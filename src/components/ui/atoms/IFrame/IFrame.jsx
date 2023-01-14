import React from 'react';

import { StyledIFrame } from './IFrame.styles';

export default function IFrame({ height, width, source, ...props }) {
  return (
    <StyledIFrame
      height={height}
      src={source}
      width={width}
      {...props}
    ></StyledIFrame>
  );
}
