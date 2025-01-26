import * as React from "react";
import Navbar from "../components/Navbar";
import GlobalStyles from "../styles/GlobalSyles";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import Hero from "../components/Hero";
import OFirmieSection from "../components/OFirmieSection";
import OfertaSection from "../components/OfertaSection";
import CennikSection from "../components/CennikSecition"
import StrefaKlienta from "../components/StrefaKlientaSection";
import KalkulatoryWyszSection from "../components/KalkulatoryWyszSection";
import KontaktSection from "../components/KontaktSection";
import Footer from "../components/Footer";


const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <OFirmieSection />
      <OfertaSection />
      <CennikSection />
      <StrefaKlienta />
      <KalkulatoryWyszSection />
      <KontaktSection />
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>IDEO Biuro Rachunkowe</title>;
