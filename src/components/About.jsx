import React from "react";
import "../css/about.css";

export default function App() {
  return (
    <div className="about-container">
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
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
            aliquam.
          </li>
          <li>
            Laborum quos quidem sequi quas fugit itaque vel quibusdam inventore?
          </li>
          <li>
            Expedita temporibus suscipit perferendis accusantium ducimus quasi
            mollitia atque sequi.
          </li>
        </ul>
      </div>
    </div>
  );
}
