import React from "react";
import PortfolioCard from "./common/PortfolioCard";

import "../css/portfolio.css";

export default function App() {
  return (
    <>
      <p className="portfolio-header">Portfolio</p>
      <p className="portfolio-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, cum.
      </p>
      <div className="portfolio-container">
        <div className="portfolio-grid">
          <PortfolioCard image="https://source.unsplash.com/collection/190327/1600x900/weekly" />
          <PortfolioCard image="https://source.unsplash.com/collection/192427/1600x900/weekly" />
          <PortfolioCard image="https://source.unsplash.com/collection/190527/1600x900/weekly" />
          <PortfolioCard image="https://source.unsplash.com/collection/190627/1600x900/weekly" />
          <PortfolioCard image="https://source.unsplash.com/collection/199877/1600x900/weekly" />
          <PortfolioCard image="https://source.unsplash.com/collection/190847/1600x900/weekly" />
        </div>
      </div>
    </>
  );
}
