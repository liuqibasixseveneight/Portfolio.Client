import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledButton = styled.button`
  align-items: center;
  background: red;
  border: 0;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.6rem 0.8rem;
  transition: all 100ms linear;
  white-space: nowrap;

  &:disabled,
  &[disabled] {
    background: #f7f7f7;
    color: purple;
    cursor: default;
  }
`;

export const StyledLinkButton = styled(NavLink)``;
