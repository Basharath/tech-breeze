import React from "react";

import Navbar from "./components/Navbar";
import PageIntro from "./components/PageIntro";
import InfoCards from "./components/InfoCards";
import About from "./components/About";
import SiteData from "./components/SiteData";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <PageIntro />
      <InfoCards />
      <About />
      <SiteData />
    </>
  );
}
