import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="texSection">
        <div className="text">
          <h2>
            Easy <br /> payment for any business
          </h2>
        </div>
        <p>
          For ambitious companies around the world, wallet makes moving money as
          simple, borderless and programmable as the rest of the internet.
        </p>
        <a className="startBtn" href="">
          Get Started
        </a>
      </div>
      <div className="imgSection">
        <img src="/heroimg.png" alt="hero_img" />
      </div>
    </div>
  );
}
