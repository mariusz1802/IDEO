import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import RectangleText from "./RectangleText";
import { StaticImage } from "gatsby-plugin-image";
import { oFirmie } from "../components/data/contentData.js";

export class OFirmieSection extends Component {
  render() {
    return (
      <>
        <HV>
          <SectionTitle
            firstWord={oFirmie.titleFirstWord}
            secondWord={oFirmie.titleSecondWord}
            underTitle={oFirmie.underTitle}
          />
          <ContentContainer>
            <RectangleTextContainer>
              <RectangleText text={oFirmie.textContent} />
            </RectangleTextContainer>
            <StaticImage src="../assets/ksiegowa.png" alt="Księgowa" />
          </ContentContainer>
        </HV>
      </>
    );
  }
}

export default OFirmieSection;

const HV = styled.div`
  padding: 10vh 0 10vh 30px;
  margin: 0 0 0 auto;
  height: 100vh;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RectangleTextContainer = styled.div`
  margin-right: -50px;
  z-index: 20;
`;
