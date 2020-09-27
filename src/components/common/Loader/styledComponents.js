import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid blue;
width: 40px;
height: 40px;
animation: ${spin} 1s linear infinite;`

