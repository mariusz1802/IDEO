import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ButtonAnchor = styled(AnchorLink)`
  background: linear-gradient(#0072b6, #043694);
  height: 100px;
  font-size: 17px;
  padding: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: bold;
  border-left: 1px solid white;
  border-right: 1px solid white;
  z-index: 100;
  transition: 0.8s ease-in-out;
  white-space: pre-wrap;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background: linear-gradient(#018cdf, #0f4ab6);
  }

  @media screen and (max-width: 1390px) {
    display: none;
  }
`;

function ButtonNavbar({ title, to }) {
  return <ButtonAnchor to={to}>{title}</ButtonAnchor>;
}

export default ButtonNavbar;
