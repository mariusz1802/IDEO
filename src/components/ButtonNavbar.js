import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Container = styled(AnchorLink)`
  background: linear-gradient(#155e98, #071f32);
  height: 124px;
  /* width: 200px; */
  font-size: 20px;
  padding: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border-left: 1px solid white;
  border-right: 1px solid white;
  z-index: 100;
  transition: background 0.5s ease-in-out, transform 0.5s ease-in-out;
  &:hover {
    cursor: pointer;

    background: linear-gradient(#155e98, #1581d7);
  }
`;

function ButtonNavbar({title}) {
  return <Container>{title}</Container>;
}

export default ButtonNavbar;
