import React, { useEffect, useState } from "react";
import { useCountUp } from "react-countup";

export default function App({ end, title }) {
  const { countUp, start } = useCountUp({
    start: 0,
    end: end,
    duration: 2
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    scroll();
  }, []);

  const scroll = async () => {
    const data = await document.getElementById("data");
    const position = await data.getBoundingClientRect().bottom;

    document.addEventListener("scroll", () => {
      if (!loaded) {
        if (window.pageYOffset > position) {
          start();
          setLoaded(true);
        }
      }
    });
  };

  return (
    <div className="counter">
      <div className="counter-number">{countUp}</div>
      <p className="counter-title">{title}</p>
    </div>
  );
}
