import React from 'react'
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './header.scss'

const Header = () => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;

  return (
    <>
      <section className="main-navbar">
        <div class="custom-container">
          <nav class="navbar navbar-expand-xl">
            <a class="navbar-brand" href="/"><img src="\logo.svg" alt="logo" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span><img src="\assets\menu.svg" alt="img" className="img-fluid" /></span>
            </button>
            <div class="collapse navbar-collapse mobile-none" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <HashLink to="#home" class="nav-link" style={
                    isActive("#home")
                      ? {
                        color: "#F40080",
                      }
                      : {}
                  }> <a>Home</a></HashLink>
                </li>
                <li class="nav-item">
                  <HashLink to="#about" class="nav-link" style={
                    isActive("#about")
                      ? {
                        color: "#F40080"
                      }
                      : {}
                  }><a >About</a></HashLink>
                </li>
                <li class="nav-item">
                  <HashLink to="#features" class="nav-link" style={
                    isActive("#features")
                      ? {
                        color: "#F40080"
                      }
                      : {}
                  }> <a>Features</a></HashLink>
                </li>
                <li class="nav-item">
                  <HashLink class="nav-link" to="#how" style={
                    isActive("#how")
                      ? {
                        color: "#F40080"
                      }
                      : {}
                  }><a>How It Works</a></HashLink>
                </li>
                <li class="nav-item">
                  <HashLink class="nav-link" to="#tokenomics" style={
                    isActive("#tokenomics")
                      ? {
                        color: "#F40080"
                      }
                      : {}
                  }> <a >Tokenomics</a></HashLink>
                </li>
                <li class="nav-item">
                  <HashLink class="nav-link" to="#community" style={
                    isActive("#community")
                      ? {
                        color: "#F40080"
                      }
                      : {}
                  }> <a >Community</a></HashLink>
                </li>
              </ul>
              <div class="d-flex">
                <div className="icons">
                  {/* <a href='' target='_blank' className="socialiconlink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12.6 4.43344H14.1667V1.78344C13.4081 1.70456 12.646 1.66562 11.8833 1.66677C9.61666 1.66677 8.06666 3.05011 8.06666 5.58344V7.76677H5.50833V10.7334H8.06666V18.3334H11.1333V10.7334H13.6833L14.0667 7.76677H11.1333V5.87511C11.1333 5.00011 11.3667 4.43344 12.6 4.43344Z" fill="white" fill-opacity="0.6" />
                    </svg>
                  </a> */}
                  <a href='https://x.com/TeaSwap_org?s=09' target='_blank' className="socialiconlink">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="filename 1">
                        <g id="Group">
                          <path id="Vector" d="M15.2033 1.875H17.96L11.9375 8.75833L19.0225 18.125H13.475L9.13001 12.4442L4.15835 18.125H1.40001L7.84168 10.7625L1.04501 1.875H6.73335L10.6608 7.0675L15.2033 1.875ZM14.2358 16.475H15.7633L5.90335 3.43833H4.26418L14.2358 16.475Z" fill="white" fill-opacity="0.6" />
                        </g>
                      </g>
                    </svg>
                  </a>
                  <a href='https://t.me/TeaSwap_org' target='_blank' className="socialiconlink">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="telegram">
                        <path id="Vector" d="M14.9958 7.93461C15.5411 7.39792 16.0823 6.14567 13.8106 7.66627C11.6884 9.10395 9.55183 10.5209 7.40114 11.917C7.07365 12.0627 6.71959 12.1418 6.36026 12.1495C6.00093 12.1572 5.64372 12.0933 5.31011 11.9617C3.94703 11.5592 2.35579 11.0225 2.35579 11.0225C2.35579 11.0225 1.26928 10.3507 3.12918 9.63509C3.12918 9.63509 10.9925 6.45873 13.7197 5.33967C14.7647 4.89243 18.3097 3.46128 18.3097 3.46128C18.3097 3.46128 19.9464 2.83418 19.8101 4.35575C19.7646 4.98188 19.4011 7.17528 19.0376 9.54565C18.4914 12.9009 17.9008 16.5702 17.9008 16.5702C17.9008 16.5702 17.8099 17.5988 17.0375 17.7777C16.2107 17.7639 15.4118 17.4808 14.7657 16.9727C14.5839 16.8385 11.357 14.825 10.1747 13.8411C10.0544 13.7608 9.9567 13.652 9.89062 13.5247C9.82464 13.3973 9.79234 13.2556 9.79689 13.1126C9.80143 12.9697 9.84262 12.8303 9.9166 12.7072C9.99058 12.5842 10.095 12.4816 10.2201 12.4089C11.8418 10.9485 13.4339 9.45678 14.9958 7.93461Z" fill="white" fill-opacity="0.6" />
                      </g>
                    </svg>
                  </a>
                  {/* <a href='' target='_blank' className="socialiconlink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M11.9886 8.01126C13.087 9.10961 13.087 10.8904 11.9886 11.9887C10.8903 13.0871 9.10948 13.0871 8.01114 11.9887C6.91279 10.8904 6.91279 9.10961 8.01114 8.01126C9.10948 6.91291 10.8903 6.91291 11.9886 8.01126Z" fill="white" fill-opacity="0.6" />
                      <path d="M13.2812 2.5H6.71875C4.39239 2.5 2.5 4.39239 2.5 6.71875V13.2812C2.5 15.6076 4.39239 17.5 6.71875 17.5H13.2812C15.6076 17.5 17.5 15.6076 17.5 13.2812V6.71875C17.5 4.39239 15.6076 2.5 13.2812 2.5ZM10 13.75C7.93228 13.75 6.25 12.0682 6.25 10C6.25 7.93183 7.93228 6.25 10 6.25C12.0677 6.25 13.75 7.93183 13.75 10C13.75 12.0682 12.0677 13.75 10 13.75ZM14.2188 6.25C13.9599 6.25 13.75 6.04012 13.75 5.78125C13.75 5.52233 13.9599 5.3125 14.2188 5.3125C14.4776 5.3125 14.6875 5.52233 14.6875 5.78125C14.6875 6.04012 14.4776 6.25 14.2188 6.25Z" fill="white" fill-opacity="0.6" />
                    </svg>
                  </a>
                  <a href='' target='_blank' className="socialiconlink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M1.25 3.28283C1.25 2.69359 1.46115 2.20748 1.88345 1.82449C2.30574 1.44149 2.85474 1.25 3.53041 1.25C4.19402 1.25 4.73093 1.43854 5.14117 1.81566C5.56346 2.20455 5.77461 2.71127 5.77461 3.33586C5.77461 3.90152 5.5695 4.37288 5.15927 4.75C4.73697 5.13889 4.18195 5.33333 3.49421 5.33333H3.47611C2.81249 5.33333 2.27559 5.13889 1.86535 4.75C1.45511 4.36111 1.25 3.87205 1.25 3.28283ZM1.48528 18.75V6.94192H5.50314V18.75H1.48528ZM7.72925 18.75H11.7471V12.1566C11.7471 11.7441 11.7954 11.4259 11.8919 11.202C12.0608 10.8013 12.3172 10.4625 12.6611 10.1856C13.0049 9.90866 13.4363 9.7702 13.9551 9.7702C15.3065 9.7702 15.9821 10.6599 15.9821 12.4394V18.75H20V11.9798C20 10.2357 19.5777 8.91288 18.7331 8.01136C17.8885 7.10985 16.7724 6.65909 15.3849 6.65909C13.8284 6.65909 12.6158 7.31313 11.7471 8.62121V8.65657H11.729L11.7471 8.62121V6.94192H7.72925C7.75337 7.31902 7.76544 8.49157 7.76544 10.4596C7.76544 12.4276 7.75337 15.1911 7.72925 18.75Z" fill="white" fill-opacity="0.6" />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header