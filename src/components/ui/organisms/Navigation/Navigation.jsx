import React, { createContext } from 'react';

import { Wrapper } from './Navigation.styles';

const NavigationGroupContext = createContext();

export default function Navigation({
  children,
  margin,
  padding,
  isVertical,
  styles = {},
  ...props
}) {
  return (
    <NavigationGroupContext value={props}>
      <Wrapper
        margin={margin}
        padding={padding}
        isVertical={isVertical}
        styles={styles}
      >
        {children}
      </Wrapper>
    </NavigationGroupContext>
  );
}
