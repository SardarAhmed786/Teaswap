
import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <>
      <section className="mainbanner" id="home">
        <span className="rightshade"></span>
        <span className="leftshade"></span>
        <span className="rightshadebannerimg"></span>
        <img src="\assets\bottomimg.png" alt="img" className="bottom" />
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
