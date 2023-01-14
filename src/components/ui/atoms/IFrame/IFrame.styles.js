import styled from 'styled-components';

export const StyledIFrame = styled.iframe`
  border: none;
  display: flex;
  flex: 1;
  height: ${({ height }) => height ?? '100%'};
  outline: 0;
  width: ${({ width }) => width ?? '100%'};
`;
