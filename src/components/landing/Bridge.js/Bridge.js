import React from 'react'
import './bridge.scss'

const Bridge = () => {
  return (
    <section className="mainbridge">
      <div className="custom-container">
        <div className="bridgemaincards">
          <div className='bridgecard wow animate__animated animate__fadeInLeft' data-wow-duration="1s" data-wow-delay="1s">
            <img src="\assets\bridgecardone.svg" alt="bridgecardimg" className="bridgecardimg" />
            <h4 className="bridgecardhead">TeaSwap Bridge</h4>
            <p className="bridgecardpara">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus</p>
            <button className="bridgebtn">Go To Bridge</button>
          </div>
          <div className='bridgecard wow animate__animated animate__fadeInRight' data-wow-duration="1s" data-wow-delay="1s">
            <img src="\assets\bridgecardtwo.svg" alt="bridgecardimg" className="bridgecardimg" />
            <h4 className="bridgecardhead">TeaSwap Lottery</h4>
            <p className="bridgecardpara">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus</p>
            <button className="bridgebtn">Go To Swap</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bridge