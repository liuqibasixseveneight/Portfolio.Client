import React from 'react';

import { StyledButton, StyledLinkButton } from './Button.styles';

export default function Button({
  disabled = false,
  link = false,
  name = '',
  onClick = () => {},
  text = '',
  to = '/',
  type = 'button',
}) {
  const buttonToShow = link ? (
    <StyledLinkButton
      data-test='component-uiAtom-linkButton'
      disabled={disabled}
      name={name}
      onClick={onClick}
      to={to}
    >
      {text}
    </StyledLinkButton>
  ) : (
    <StyledButton
      data-test='component-uiAtom-button'
      disabled={disabled}
      name={name}
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );

  return buttonToShow;
}
