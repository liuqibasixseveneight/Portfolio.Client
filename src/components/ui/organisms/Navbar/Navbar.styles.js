import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  outline: 1px solid red;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;

  & ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
`;
