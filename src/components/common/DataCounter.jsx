import React, { useLayoutEffect, useState } from "react";
import { useCountUp } from "react-countup";

export default function App({ end, title }) {
  const { countUp } = useCountUp({
    start: 0,
    end: end,
    duration: 2,
    delay: 3
  });

  return (
    <div className="counter">
      <div className="counter-number">{countUp}</div>
      <p className="counter-title">{title}</p>
    </div>
  );
}
