import React from "react";
import styled from "styled-components";

function SectionTitle({
  firstWord,
  secondWord,
  underTitle,
  color,
  underTitleColor,
  textAlign,
}) {
  const validColor = color === "white" ? "white" : undefined;
  const validUnderTitleColor =
    underTitleColor === "white" ? "white" : undefined;

  const CenterAlign = textAlign === "center" ? "center" : undefined;

  return (
    <Container>
      <H1_Styled
        color={validColor}
        data-sal="flip-up"
        data-sal-easing="ease-out-back"
        data-sal-delay="300"
        data-sal-duration="1200"
      >
        {firstWord} <span>{secondWord}</span>
      </H1_Styled>
      <UnderTitle
        underTitleColor={validUnderTitleColor}
        textAlign={CenterAlign}
        data-sal="flip-down"
        data-sal-easing="ease-out-back"
        data-sal-delay="300"
        data-sal-duration="1200"
      >
        {underTitle}
      </UnderTitle>
    </Container>
  );
}

const Container = styled.div`
  @media screen and (max-width: 700px) {
    margin-left: 30px;
  }
`;

const H1_Styled = styled.h1`
  font-family: "Agbalumo" !important;
  font-size: clamp(1.6rem, 4vw, 7rem);
  text-align: left;
  color: ${({ color, theme }) => color || theme.colors.text};
  text-decoration: underline;
  text-decoration-thickness: 6px;
  text-underline-offset: 15px;
  span {
    color: ${({ color, theme }) => color || theme.colors.titleColor};
    text-decoration: underline;
    text-decoration-thickness: 6px;
    text-underline-offset: 15px;
  }
  @media screen and (max-width: 700px) {
    font-size: 2.5rem;
  }
`;

const UnderTitle = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: clamp(1rem, 1.5vw, 4rem);
  text-align: ${({ textAlign }) => textAlign || "left"};
  padding-top: 0.6rem;
  color: ${({ underTitleColor, theme }) =>
    underTitleColor || theme.colors.text};
  text-transform: uppercase;
  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
  }
`;

export default SectionTitle;
