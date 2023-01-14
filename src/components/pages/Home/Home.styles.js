import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  min-height: calc(100vh - 100px);
  justify-content: space-between;
  position: relative;
  transition: all 100ms linear;
`;

export const Introduction = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
`;
