
import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <>
      <section className="mainbanner" id="home">
        <span className="rightshade"></span>
        <span className="leftshade"></span>
        <span className="rightshadebannerimg"></span>
        <img src="\assets\bottomimg.png" alt="img" className="bottom rotating-circle" />
        <img src="\assets\bannerimg.svg" className="img-fluid bannerimg wow animate__animated animate__zoomIn" data-wow-duration="2s" data-wow-delay="2s" />
        <div className="custom-container">
          <div className="mainparent animate__fadeInLeft">
            <button className="topbtn wow animate__animated animate__fadeInDown" data-wow-duration="2s" data-wow-delay="2s">BUILT ON WEB3. POWERED BY YOU.</button>
            <h2 className="heading wow animate__animated animate__fadeInDown" data-wow-duration="1s" data-wow-delay="1s">Welcome to TeaSwap</h2>
            <p className="wow animate__animated animate__fadeInDown" data-wow-duration="1s" data-wow-delay="1s">Our Gateway to Decentralized Finance on tomiChain.</p>
            <button className="start">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
