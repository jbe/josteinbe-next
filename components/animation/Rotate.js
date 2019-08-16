import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const Animator = styled.div`
  animation: ${animation} 2s infinite linear;
`;

export default Animator;
