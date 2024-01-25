import "./header.scss";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";

import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = ({ show, setShow }) => {
  const [showModal, setShowModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowModal(false);
    setShowOffcanvas(false);
  };

  const handleShow = () => {
    setShow(true);
    setShowModal(true);
    setShowOffcanvas(true);
  };



  return (
    <>
      <section className="main-navbar">
        <div className="custom-container">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="/"><img src="\logo.svg" alt="img" className='img-fluid' /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 17H13M5 12H19M11 7H19" stroke="#53FFEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav navbar-navvvvv  me-0 mb-2 mb-lg-0">

                <li class="nav-item">
                  <a class="nav-link active for-a" aria-current="page" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link for-a" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link for-a" href="#partners">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link for-a" href="#tokenomics">How It Works</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link for-a" href="#roadmap">Tokenomics</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link for-a" href="#roadmap">Community</a>
                </li>
             



              </ul>
              <ul class="navbar-nav navbar-navv d-none me-0 mb-2 mb-lg-0">
                <li class="nav-item forsocial">
                  <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15.2033 1.875H17.96L11.9375 8.75833L19.0225 18.125H13.475L9.13 12.4442L4.15833 18.125H1.4L7.84167 10.7625L1.045 1.875H6.73333L10.6608 7.0675L15.2033 1.875ZM14.2358 16.475H15.7633L5.90333 3.43833H4.26417L14.2358 16.475Z" fill="#F0FF40" />
                  </svg></a>
                  <a class="nav-link active" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14.5749 7.09689C15.1883 6.50241 15.7972 5.11529 13.2415 6.79965C10.854 8.39212 8.45037 9.96168 6.03089 11.5081C5.66246 11.6696 5.26416 11.7572 4.85991 11.7657C4.45565 11.7742 4.0538 11.7034 3.67848 11.5576C2.14502 11.1118 0.354872 10.5173 0.354872 10.5173C0.354872 10.5173 -0.86745 9.77313 1.22494 8.98049C1.22494 8.98049 10.0712 5.46207 13.1393 4.2225C14.3149 3.7271 18.303 2.14182 18.303 2.14182C18.303 2.14182 20.1443 1.44718 19.9909 3.13262C19.9398 3.82618 19.5309 6.25579 19.122 8.88141C18.5075 12.598 17.843 16.6624 17.843 16.6624C17.843 16.6624 17.7407 17.8018 16.8718 18C15.9416 17.9847 15.0428 17.6712 14.316 17.1083C14.1116 16.9597 10.4813 14.7293 9.15115 13.6394C9.01585 13.5506 8.90592 13.43 8.83161 13.289C8.75729 13.1479 8.72099 12.9909 8.7261 12.8326C8.7312 12.6743 8.77753 12.5198 8.86078 12.3835C8.94404 12.2472 9.06151 12.1335 9.20226 12.053C11.0266 10.4354 12.8178 8.783 14.5749 7.09689Z" fill="#F0FF40" />
                  </svg></a>
                </li>
                <li class="nav-item">
                  <Link to="/whitelist" class="nav-link active for-a" aria-current="page" >WHITELIST</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link connect-wallet" aria-current="page" href="#">Connect Wallet</a>
                </li>




              </ul>
              <button className="connect-btn" onClick={handleShow}>
                sign in
              </button>

            </div>
          </nav>
        </div>
      </section>


      <Modal className="connectwallet-modal" show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="twice-btns" >
            <button className="forhideee">
              <img src="\assets\metamask.svg" alt="img" className="img-fluid" />
              <h6>Metamask</h6>
            </button>

            <button >
              <img
                src="\assets\walletconnect.svg"
                alt="img"
                className="img-fluid"
              />
              <h6>WalletConnect</h6>
            </button>

            {/* } */}

          </div>

        </Modal.Body>

      </Modal>


    </>
  );
};

export default Header;