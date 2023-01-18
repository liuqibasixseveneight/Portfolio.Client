import React, { createContext } from 'react';

import { List, ListItem } from '@portfolio/ui';
import { Wrapper } from './Navigation.styles';

const NavigationGroupContext = createContext();

function NavigationListItem({ children, ...props }) {
  return <ListItem {...props}>{children}</ListItem>;
}

function NavigationList({ children, listStyle, ordered, ...props }) {
  return (
    <List listStyle={listStyle} ordered={ordered} {...props}>
      {children}
    </List>
  );
}

export default function Navigation({ children, ...props }) {
  return (
    <NavigationGroupContext.Provider value={props}>
      <Wrapper>{children}</Wrapper>
    </NavigationGroupContext.Provider>
  );
}

Navigation.ListItem = NavigationListItem;
Navigation.List = NavigationList;
