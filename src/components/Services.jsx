import React from "react";
import ServiceCard from "./common/ServiceCard";

import "../css/services.scss";

export default function InfoCards() {
  return (
    <div className="services-container" id="services">
      <div className="title">Services</div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        odit?
      </div>
      <div className="services">
        <ServiceCard
          icon="fab fa-dribbble"
          title="Loreum ipsum"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ipsum."
        />

        <ServiceCard
          icon="far fa-file-alt"
          title="Quos dolores"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ipsum."
        />
        <ServiceCard
          icon="fas fa-tachometer-alt"
          title="Cupiditate non"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ipsum."
        />
        <ServiceCard
          icon="fas fa-globe-americas"
          title="Cupiditate non"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ipsum."
        />
        <ServiceCard
          icon="fab fa-slideshare"
          title="Cupiditate non"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ipsum."
        />
        <ServiceCard
          icon="fas fa-archway"
          title="Cupiditate non"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ipsum."
        />
      </div>
    </div>
  );
}
