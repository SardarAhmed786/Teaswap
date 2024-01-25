import '../../App.scss';
import React, { useEffect } from "react";
import Banner from './Banner/Banner.js';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';
import Decentralized from './Decentralized/Decentralized.js';
import Teaswap from './Teaswap/Teaswap.js';
import Swapfeature from '../Swapfeature/Swapfeature.js';
import Howitswork from '../Howitswork/Howitswork.js';
import Tokenism from '../Tokenism/Tokenism.js';
import Security from '../Security/Security.js';

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <Decentralized />
      <Teaswap />
      <Swapfeature />
      <Howitswork />
      <Tokenism />
      <Security />
      <Footer />
    </>
  );
}

export default Landing;