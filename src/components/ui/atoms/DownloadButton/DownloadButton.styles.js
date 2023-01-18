import styled from 'styled-components';

export const StyledAnchor = styled.a`
  align-items: center;
  background: ${({ theme }) => theme?.core?.['900']};
  border: ${({ theme }) => `1px solid ${theme?.primary?.['400']}`};
  border-radius: 4px;
  color: ${({ theme }) => theme?.primary?.['400']};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.8rem;
  transition: all 100ms linear;

  &:hover {
    background: ${({ theme }) => theme?.primary?.['900']};
    border: ${({ theme }) => `1px solid ${theme?.primary?.['200']}`};
    color: ${({ theme }) => theme?.primary?.['200']};
  }
`;
