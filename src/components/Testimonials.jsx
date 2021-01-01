import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import TestimonialCard from "./common/TestimonialCard";
import "../css/testimonials.css";

const items = [
  <TestimonialCard
    testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi debitis consequatur ea corporis dolore eveniet?"
    image="https://randomuser.me/api/portraits/men/32.jpg"
    name="John Doe"
    work="Freelancer"
    data-value="1"
  />,
  <TestimonialCard
    testimony="Cum, consequa! Aspernatur id fuga lam ad eveniet, volupt repud magnam tempore quae qui invent!"
    image="https://randomuser.me/api/portraits/men/42.jpg"
    name="Wen Will"
    work="Designer"
    data-value="2"
  />,
  <TestimonialCard
    testimony="Nihil quasi voluptatibus aperiam est quos laborum earum iure! Et wakvik al odio corporis laborum blanditiis soluta!"
    image="https://randomuser.me/api/portraits/women/32.jpg"
    name="San Mary"
    work="Store owner"
    data-value="3"
  />,
  <TestimonialCard
    testimony="Voluptatum fuga dolores asperiores cupiditate ab vero, fugit nulla quo perspiciatis at, maxime eos soqu!"
    image="https://randomuser.me/api/portraits/women/76.jpg"
    name="Doe Lisa"
    work="CEO"
  />,
  <TestimonialCard
    testimony="Voluptatum fuga dolores asperiores cupiditate ab vero, fugit nulla quo perspiciatis at, maxime eos soqu!"
    image="https://randomuser.me/api/portraits/men/51.jpg"
    name="Doe Den"
    work="Marketer"
  />
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1000: { items: 3 }
};

export default function App() {
  return (
    <div id="testimonials">
      <div className="testimonials-title">Testimonials</div>
      <p className="testimonials-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus, tenetur.
      </p>
      <div className="testimonial-container">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          infinite
          autoPlayInterval={1000}
          animationDuration={1000}
        />
      </div>
    </div>
  );
}
