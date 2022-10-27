import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
     to {
        -webkit-transform: rotate(360deg);
      }`;

export const LoaderSpiner = styled.div`
  position: absolute;
  top: 65%;
  left: 48%;
  width: 70px;
  height: 70px;
  border: 7px solid #ff23693b;
  border-radius: 50%;
  border-top-color: #ff2369;
  animation: spin 1s linear infinite;
  animation: ${spinAnimation} 1s linear infinite;
`;
