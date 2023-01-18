import styled from 'styled-components';

export const StyledUnorderedList = styled.ul`
  align-items: center;
  display: flex;
  gap: 2rem;
  justify-content: center;
  list-style: none;
`;

export const StyledOrderedList = styled.ol`
  align-items: center;
  display: flex;
  gap: 2rem;
  justify-content: center;
  list-style: ${({ listStyle }) => listStyle ?? 'disc outside none'};
`;
