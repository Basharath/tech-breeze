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
          style={toggle ? { top: window.pageXOffset + 63 } : {}}
        >
          <div className="video-container">
            <video
              className="intro-video"
              autoPlay
              controls
              src="https://vod-progressive.akamaized.net/exp=1609530817~acl=%2A%2F890230824.mp4%2A~hmac=6d692cf54de04f7c9f553aa31da0414fd27e656737f2f1170239cb13b8b29932/vimeo-prod-skyfire-std-us/01/4292/9/246463976/890230824.mp4?download=1&filename=Atoms+-+13232.mp4"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
