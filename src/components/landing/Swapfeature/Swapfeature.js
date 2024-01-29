import React from 'react'
import "./swapfeature.scss"
const Swapfeature = () => {
    return (
        <>
            <section className='swapfeature' id="features">
                <shade className="leftshadeswap"></shade>
                <div className='custom-container'>
                    <div className='mainfeaturehead wow animate__animated animate__fadeIn' data-wow-duration="1s" data-wow-delay="1s">
                        <h2>TeaSwap Features</h2>
                        <p>At vero eos et accusamus et iEvoluptatum deleniti atque corrupti quos dolores.</p>
                    </div>
                    <div className='parentcard'>
                        <div className='innercard wow animate__animated animate__zoomIn' data-wow-duration="1s" data-wow-delay="1s">
                            <div className='maincontent'>
                                <img src='\assets\command.svg' alt='img' className='img-fluid' />
                                <h3>zk Transactions</h3>
                                <p>Ea dicta illo et aliquid libero cum delectus accusamus! Vel fuga distinctio ut voluptatem eaque sit recusandae tempora qui numquam omnis</p>
                            </div>
                        </div>
                        <div className='innercard wow animate__animated animate__zoomIn' data-wow-duration="1s" data-wow-delay="1s">
                            <div className='maincontent'>
                                <img src='\assets\lock.svg' alt='img' className='img-fluid' />
                                <h3>Private Swaps</h3>
                                <p>Ea dicta illo et aliquid libero cum delectus accusamus! Vel fuga distinctio ut voluptatem eaque sit recusandae tempora qui numquam omnis</p>
                            </div>
                        </div>
                        <div className='innercard wow animate__animated animate__zoomIn' data-wow-duration="1s" data-wow-delay="1s">
                            <div className='maincontent'>
                                <img src='\assets\flash.svg' alt='img' className='img-fluid' />
                                <h3>Low Fees</h3>
                                <p>Ea dicta illo et aliquid libero cum delectus accusamus! Vel fuga distinctio ut voluptatem eaque sit recusandae tempora qui numquam omnis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Swapfeature