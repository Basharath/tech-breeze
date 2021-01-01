import React from "react";

import Navbar from "./components/Navbar";
import PageIntro from "./components/PageIntro";
import InfoCards from "./components/InfoCards";
import About from "./components/About";
import SiteData from "./components/SiteData";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <PageIntro />
      <InfoCards />
      <About />
      <SiteData />
      <Services />
      <Portfolio />
      <Testimonials />
      <CallToAction />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
