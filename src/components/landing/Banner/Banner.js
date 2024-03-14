
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
        <img src="\assets\bannerimg.svg" alt="img" className="img-fluid bannerimg wow animate__animated animate__zoomIn" data-wow-duration="2s" data-wow-delay="2s" />
        <div className="custom-container">
          <div className="mainparent wow animate__animated animate__fadeInDown" data-wow-duration="1s" data-wow-delay="1s">
            <button className="topbtn">BUILT ON WEB3. POWERED BY YOU.</button>
            <h2 className="heading">Discover your Future with TeaSwap
            </h2>
            <p>The pioneering decentralized exchange on the DOP protocol!</p>
            <button className="start">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
