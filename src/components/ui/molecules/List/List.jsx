import React from 'react';

import { StyledOrderedList, StyledUnorderedList } from './List.styles';

export default function List({
  children,
  listStyle,
  ordered = false,
  ...props
}) {
  if (ordered) {
    return (
      <StyledOrderedList listStyle={listStyle} {...props}>
        {children}
      </StyledOrderedList>
    );
  }

  return <StyledUnorderedList {...props}>{children}</StyledUnorderedList>;
}
