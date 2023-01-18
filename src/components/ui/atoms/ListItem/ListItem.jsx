import React from 'react';

import { StyledListItem } from './ListItem.styles';

export default function ListItem({ children, ...props }) {
  return <StyledListItem {...props}>{children}</StyledListItem>;
}
