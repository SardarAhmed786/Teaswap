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
                        <p>Explore our game-changing features right here!</p>
                    </div>
                    <div className='parentcard'>
                        <div className='innercard wow animate__animated animate__zoomIn' data-wow-duration="1s" data-wow-delay="1s">
                            <div className='maincontent'>
                                <img src='\assets\command.svg' alt='img' className='img-fluid' />
                                <h3>zk Transactions</h3>
                                <p>Enhanced privacy with zK transactions for secure trading on TeaSwap.</p>
                            </div>
                        </div>
                        <div className='innercard wow animate__animated animate__zoomIn' data-wow-duration="1s" data-wow-delay="1s">
                            <div className='maincontent'>
                                <img src='\assets\lock.svg' alt='img' className='img-fluid' />
                                <h3>Private Swaps</h3>
                                <p>Conduct private swaps with TeaSwap's innovative privacy features.</p>
                            </div>
                        </div>
                        <div className='innercard wow animate__animated animate__zoomIn' data-wow-duration="1s" data-wow-delay="1s">
                            <div className='maincontent'>
                                <img src='\assets\flash.svg' alt='img' className='img-fluid' />
                                <h3>Low Fees</h3>
                                <p>Low transaction fees while trading on TeaSwap's decentralized exchange.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Swapfeature