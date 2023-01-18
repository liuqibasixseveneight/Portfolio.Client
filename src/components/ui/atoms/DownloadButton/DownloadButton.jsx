import React from 'react';

import { StyledAnchor } from './DownloadButton.styles';

export default function DownloadButton({
  src = '#',
  downloadLabel,
  text = 'Download Button',
}) {
  return (
    <StyledAnchor download={downloadLabel && downloadLabel} href={src}>
      {text}
    </StyledAnchor>
  );
}
