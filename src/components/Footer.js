import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

function Footer() {
  return <BlueContainer></BlueContainer>;
}

export default Footer;

const BlueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 auto;
  width: 70%;
  height: 45vh;
  background: linear-gradient(-30deg, #043694, #0072b6);
  position: relative; /* Aby pseudoelementy działały */

  /* Pseudoelementy tworzące podwójny obrys */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* Obejmuje całą szerokość */
    height: 100%; /* Obejmuje całą wysokość */
    pointer-events: none; /* Wyłącz interakcje */
    width: calc(100% - 15px);
    height: calc(100% - 15px);
  }

  /* Pierwszy obrys (po lewej i u góry) */
  &::before {
    border-left: 15px solid rgba(255, 255, 255, 0.1);
    border-top: 15px solid rgba(255, 255, 255, 0.1);
    z-index: 1;
  }

  /* Drugi obrys (większy, przesunięty bardziej na zewnątrz) */
  &::after {
    border-left: 30px solid rgba(4, 54, 148, 0.2);
    border-top: 30px solid rgba(4, 54, 148, 0.2);
    transform: translate(-15px, -15px); /* Przesunięcie na zewnątrz */
    z-index: 0;
  }
`;
const InnerContainer = styled(BlueContainer)`
  width: 100%;
`;
