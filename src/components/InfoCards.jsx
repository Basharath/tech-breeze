import React from "react";
import Card from "./common/Card";

import "../css/infoCards.css";

export default function InfoCards() {
  return (
    <div className="cards">
      <Card
        icon="fas fa-desktop"
        title="Loreum ipsum"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, minima commodi! Nesciunt quod possimus aliquid!"
      />

      <Card
        icon="fas fa-image"
        title="Quos dolores"
        text="Ea nam similique, laboriosam reiciendis fugiat sunt? Omnis, ducimus. Aut voluptates a soluta adipisci reprehenderit?"
      />

      <Card
        icon="fas fa-tasks"
        title="Cupiditate non"
        text="Tempore error molestiae vel, sed laboriosam quia optio laborum illum expedita quasi quis nihil necessitatibus."
      />
    </div>
  );
}
