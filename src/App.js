import React from "react";
import InfoCards from "./components/InfoCards";
import Navbar from "./components/Navbar";
import PageIntro from "./components/PageIntro";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <PageIntro />
      <InfoCards />
    </>
  );
}
