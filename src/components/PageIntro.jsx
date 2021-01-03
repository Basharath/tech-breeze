import React, { useState } from "react";

import "../css/pageIntro.css";

export default function PageIntro() {
  const [toggle, setToggle] = useState(false);

  const handleVideo = ({ target }) => {
    if (target.classList.contains("show")) {
      setToggle(false);
      document.querySelector("video").pause();
    } else {
      target.pause();
    }
  };

  return (
    <>
      <div className="page-intro-container" id="home">
        <div className="text-container">
          <h1 className="intro-title">Elegant and creative solutions</h1>
          <p className="intro-text">
            We are a team of talanted designers & developers making websites and
            apps
          </p>
          <div className="btn-row">
            <button className="text btn">Get started</button>
            <button className="video btn" onClick={() => setToggle(!toggle)}>
              Watch video <i className="far fa-play-circle icon"></i>
            </button>
          </div>
        </div>
        <div className="image-container"></div>

        <div
          className={"video-background" + (toggle ? " show" : "")}
          onClick={handleVideo}
          style={toggle ? { top: window.pageYOffset } : {}}
        >
          <div className="video-container">
            <video
              className="intro-video"
              autoPlay
              controls
              src="https://uploads.codesandbox.io/uploads/user/75b7fb6e-4dc1-44ef-966c-d5e65709d866/20yJ-Atoms+-+13232.mp4"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
