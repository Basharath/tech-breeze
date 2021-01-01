import React from "react";
import TeamCard from "./common/TeamCard";

import "../css/team.scss";

export default function App() {
  return (
    <div className="team-container" id="team">
      <div className="team-header">
        <p className="team-title">Team</p>
        <p className="team-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
          nam?
        </p>
      </div>
      <div className="team-cards">
        <TeamCard
          image="https://pngimg.com/uploads/businessman/businessman_PNG6588.png"
          name="John Wick"
          work="Chief Executive"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos natus deleniti modi consequatur veritatis? Ullam?"
        />
        <TeamCard
          image="https://pngimg.com/uploads/girls/girls_PNG6481.png"
          name="San Mary"
          work="Product Manager"
          description="Placeat tenetur nulla ipsa modi, quos asperiores error nobis non voluptatibus dolor officiis inventore perspiciatis"
        />
        <TeamCard
          image="https://purepng.com/public/uploads/large/businessman-onj.png"
          name="Ban Boro"
          work="CTO"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
        />
      </div>
    </div>
  );
}
