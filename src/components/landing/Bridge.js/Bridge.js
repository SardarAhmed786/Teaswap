import React from 'react'
import './bridge.scss'

const Bridge = () => {
  return (
    <section className="mainbridge">
      <div className="custom-container">
        <div className="bridgemaincards">
          <div className='bridgecard wow animate__animated animate__fadeInLeft' data-wow-duration="1s" data-wow-delay="1s">
            <img src="\assets\bridgecardone.svg" alt="bridgecardimg" className="bridgecardimg" />
            <h4 className="bridgecardhead">Multi-Chain (Wrapped Tokens)</h4>
            <p className="bridgecardpara">TeaSwap's roadmap includes wrapping capabilities for Ethereum and ERC20 tokens, with plans to expand to other blockchains.</p>
            <button className="bridgebtn">Go To Bridge</button>
          </div>
          <div className='bridgecard wow animate__animated animate__fadeInRight' data-wow-duration="1s" data-wow-delay="1s">
            <img src="\assets\bridgecardtwo.svg" alt="bridgecardimg" className="bridgecardimg" />
            <h4 className="bridgecardhead">Compounding Fees</h4>
            <p className="bridgecardpara">Offering compounding transaction fees, prioritizing financial viability for the chain and token holders.</p>
            <button className="bridgebtn">Go To Swap</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bridge