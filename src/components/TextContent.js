import React from "react";
import styled from "styled-components";

function TextContent({ textContent, color }) {
  const validWhite = color === "white" ? "white" : undefined;

  return (
    <TextContainer
      color={validWhite}
      data-sal="fade"
      data-sal-easing="ease-out-back"
      data-sal-delay="300"
      data-sal-duration="1200"
    >
      {textContent}
    </TextContainer>
  );
}

export default TextContent;

const TextContainer = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: clamp(1rem, 1.7vw, 3rem);
  padding: 5vh 0;
  width: 90%;
  color: ${({ color, theme }) => color || theme.colors.text};
  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
    width: 90%;
  }
`;
