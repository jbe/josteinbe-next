import styled, { keyframes } from "styled-components";

function animation(props) {
  return keyframes`
    from {
      ${props.from}
      opacity: 0;
    }

    to {
      transform: translate(0, 0);
      opacity: 1;
    }
  `;
}

const FadeIn = styled.div`
  animation: ${animation} 1s ease normal forwards running;
`;

export default ({ translateFrom, ...rest }) => (
  <FadeIn
    from={translateFrom ? `transform: translate(${translateFrom});` : ""}
    {...rest}
  />
);
