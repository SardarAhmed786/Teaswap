import React from 'react'
import './defi.scss'

const Defi = () => {
  return (
    <div className="custom-container">
        <div className='defi wow animate__animated animate__fadeInUp' data-wow-duration="1s" data-wow-delay="1s">
            <div className="defileft">
                <h3 className="defihead">Start your Journey towards a decentralized Revolution, with TeaSwap!</h3>
                <p className="defipara">Join our community now and be a part of the game-changing revolution waiting your way ahead.</p>
                <button className="defibtn">Join Community</button>
            </div>
            <img src="\assets\defiimg.svg" alt="defirightimg" className="defirightimg" />
        </div>
    </div>
  )
}

export default Defi