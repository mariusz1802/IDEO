import React from "react";
import styled from "styled-components";

function LabelButton({ icon, text, link, altText, target }) {
  return (
    <Container>
      <A href={link} alt={altText} target={target}>
        <IconStyler>{icon}</IconStyler>
        {text}
      </A>
    </Container>
  );
}
const IconStyler = styled.div`
  display: flex;
  margin-right: 5px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  transition: transform 0.8s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.brightBlue};
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  padding: 0 10px;
  height: 100%;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.darkBlue};
  &:hover {
    color: ${({ theme }) => theme.colors.brightBlue};
    ${IconStyler} {
      scale: 1.1;
    }
  }
`;

const A = styled.a`
  font-weight: 300;
  font-size: 16px;
  display: flex;
  align-items: center;
  align-content: center;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    ${IconStyler} {
      color: ${({ theme }) => theme.colors.brightBlue};
    }
  }
`;

export default LabelButton;
