import React from "react";
import styled from "styled-components";

function LabelButton({ icon, text, link, altText }) {
  return (
    <Container>
      <A href={link}>
        <IconStyler>{icon}</IconStyler>
        {text}
      </A>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  padding: 0 10px;
  height: 100%;
  white-space: nowrap;
`;

const IconStyler = styled.div`
  display: flex;
  margin-right: 5px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  &:hover {
    color: ${({ theme }) => theme.colors.brightBlue};
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
