import React from "react";
import "../css/about.css";

export default function App() {
  return (
    <div className="about-container" id="about">
      <div className="about-image-container">
        <div className="about-image"></div>
      </div>
      <div className="about-text-container">
        <div className="about-title">Lorem ipsum dolor sit amet.</div>
        <p className="about-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          minus exercitationem velit maxime, excepturi quidem?
        </p>
        <ul className="list">
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          <li>
            Laborum quos quidem sequi quas fugit itaque vel quibusdam inventore?
          </li>
          <li>
            Expedita temporibus suscipit perferendis mollitia atque sequi.
          </li>
        </ul>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolore
          saepe porro. Obcaecati, officia accusantium. Lorem ipsum dolor sit
          amet.
        </p>
      </div>
    </div>
  );
}
