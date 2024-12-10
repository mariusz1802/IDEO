import * as React from "react";
import Navbar from "../components/Navbar";
import GlobalStyle from "../styles/GlobalSyles";
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
