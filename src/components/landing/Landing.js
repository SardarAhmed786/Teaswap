import '../../App.scss';
import React, { useEffect } from "react";
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Decentralized from './Decentralized/Decentralized';
import Teaswap from './Teaswap/Teaswap';
import Swapfeature from './Swapfeature/Swapfeature';
import Howitswork from './Howitswork/Howitswork';
import Tokenism from './Tokenism/Tokenism';
import Security from './Security/Security';
import Footer from './Footer/Footer';
import Bridge from './Bridge.js/Bridge';
import Partners from './Partners/Partners';
import Defi from './Defi/Defi';
import News from './News/News';

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className="mainlandang">
      <Header />
      <Banner />
      <Decentralized />
      <Teaswap />
      <Swapfeature />
      <Howitswork />
      <Tokenism />
      <Security />
      <Bridge />
      <Partners />
      <Defi />
      <News />
      <Footer />
      </div>
    </>
  );
}

export default Landing;