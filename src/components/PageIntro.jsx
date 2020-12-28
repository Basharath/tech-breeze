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
      <div className="page-intro-container">
        <div className="text-container">
          <h1 className="intro-title">Elegant and creative solutions</h1>
          <p className="intro-text">
            We are team of talanted designers & developers making websites and
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
              src="https://r1---sn-npoeened.googlevideo.com/videoplayback?expire=1609176659&ei=88HpX53rNPHbsALR_7KwDg&ip=212.47.239.90&id=o-AOhIsluWyDH0Wlvs1x0j_84o50VC7fVYZPGBbq_lYqnr&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&vprv=1&mime=video%2Fwebm&ns=2Zb3NeBCVsPnvpFYYwUL330F&gir=yes&clen=5644507&dur=28.995&lmt=1564840616516394&fvip=1&keepalive=yes&c=WEB&txp=5431432&n=zIclVV0bq_8JSvQe&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAPNq_go8vWqrQVYlCdPI2b0aJlMYTPAi1rBdWMHp4XAeAiBP1t8jhxXD-OJnq5d-aEKRcN7fdgbFxPTraq-LciRcLQ%3D%3D&ratebypass=yes&redirect_counter=1&cm2rm=sn-25gkk7e&req_id=8e2fdea8cec2a3ee&cms_redirect=yes&mh=j0&mip=2409:4070:4211:9b34:1c36:ba2a:91bc:dbe8&mm=34&mn=sn-npoeened&ms=ltu&mt=1609154673&mv=m&mvi=1&pl=41&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgSCuE04whpsKctKC5ihqkwzls3VDHLtmAI7CrorS0RqMCIQDHT5-H2awYBle1xUp1sEShGTCPc1t4JO6sdEw0SL70OA%3D%3D"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
