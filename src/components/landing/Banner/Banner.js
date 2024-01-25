
import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <>
      <section className="mainbanner">
        <div className="right"></div>
        <div className="left"></div>
        <img src="\assets\bottomimg.svg" alt="img" className="img-fluid bottom"/>
        <img src="\assets\bannerimg.svg" className="img-fluid bannerimg" />
        <div className="custom-container">
          <div className="mainparent">
            <button className="topbtn">BUILT ON WEB3. POWERED BY YOU.</button>
            <h2 className="heading">Welcome to TeaSwap</h2>
            <p>Our Gateway to Decentralized Finance on tomiChain.</p>
            <button className="start">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
