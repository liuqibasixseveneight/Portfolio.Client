import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props?.theme?.core?.[900]};
  color: ${(props) => props?.theme?.core?.[50]};
  height: 100%;
  min-height: 100vh;
  transition: all 100ms linear;
  width: 100%;
  min-width: 100%;
`;
