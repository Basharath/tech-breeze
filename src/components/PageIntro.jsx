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
              src="https://stream.mux.com/GtWK21iLbLfc6701kAB4Zk13JlcYBYVhC/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2MDkyNDM1MzQsImF1ZCI6InYiLCJzdWIiOiJHdFdLMjFpTGJMZmM2NzAxa0FCNFprMTNKbGNZQllWaEMifQ.BDaQhg_ETYmDIh-8GGsR49nE1WEv6GiiaSqW8ALPOrL-Ks4Xomn6UhD1kTYTYsZTKG3k_NGgtpuWUSsN-wC2F1Dv9yigWBpZ3mn6yHC9cx13XbzuBMZNi96aiSoD6NP3r_DStZrfRku40R9-dgzcSL3XXdXr9slN7YPB80PFQdV8JPecvuNTpARa5CmE7LseqgpmFpdGseA1Npapv3DGI8eDUdNoMkmIDF1Og85Ll5GbnzU9xObVbMEYiomc9_k_7u-sg48GetsyClpW9qYJdxXldf3t8ebj6NpyBIr0DdMv-jCe1YrP9Y59eT7RGaZa8yFK4zoNfG2vSzMgi2oP3g"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
