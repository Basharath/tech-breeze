import React from "react";

export default function TestimonialCard({
  testimony,
  image,
  name,
  work,
  ...rest
}) {
  return (
    <div className="testimonial-card" {...rest}>
      <div className="testimonial-body">
        <i className="fas fa-quote-left quote"></i>
        {testimony}
        <if className="fas fa-quote-right quote"></if>
      </div>
      <div className="testimonial-image">
        <img src={image} alt="testimonial" />
        <div className="testimonial-details">
          <p>{name}</p>
          <p>{work}</p>
        </div>
      </div>
    </div>
  );
}
