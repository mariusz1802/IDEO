import React from "react";
import Styled, { styled } from "styled-components";



function LabelButton({ icon, text, link }) {
  return (
      <Container>
        <img src={{ icon }} alt="ikona" />
        <A href={link}>{text}</A>
      </Container>

  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const A = styled.a`
  font-size: 20px;
  font-weight: 300;
  font-size: 1.2rem;
`;

export default LabelButton;
