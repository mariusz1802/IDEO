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
            <RectangleTextContainer data-sal="slide-right" data-sal-delay="300">
              <RectangleText text={oFirmie.textContent} />
            </RectangleTextContainer>
            <div
              data-sal="slide-left"
              data-sal-easing="ease-out-back"
              data-sal-delay="300"
              data-sal-duration="1200"
            >
              <StaticImage
                src="../assets/ksiegowa.png"
                alt="Księgowa"
                data-sal="flip-left"
                data-sal-delay="300"
                data-sal-duration="1200"
              />
            </div>
          </ContentContainer>
        </HV>
      </>
    );
  }
}

export default OFirmieSection;

const HV = styled.div`
  padding: 5vh 0 5vh 3vw;
  margin: 0 0 0 auto;
  width: 100%;
  @media screen and (max-width: 700px) {
    padding: 10vh 0 10vh 0;
  }

`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const RectangleTextContainer = styled.div`
  margin-right: -50px;
  z-index: 20;
  @media screen and (max-width: 700px) {
    margin-right: 0;
  }

  @media screen and (max-width: 700px) {
    margin-right: 0;
  }
`;
