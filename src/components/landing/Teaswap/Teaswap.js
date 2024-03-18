import React from 'react'
import "./teaswap.scss"
const Teaswap = () => {
    return (
        <>
            <section className='tea'>
                <img src='\assets\leftflowermain.png' alt='img' className='leftimg'></img>
                <img src='\assets\rightflowermain.png' alt='img' className='rightimg'></img>
                <span className="leftshadetea"></span>
                <span className="rightshadetea"></span>
                <span className="extrashaderight"></span>
                <div className='custom-container'>
                    <div className='maincard wow animate__animated animate__fadeInUp' data-wow-duration="1s" data-wow-delay="1s">
                        <div className='upperparent'>
                            <p>TEA Price</p>
                            <h4>Coming Soon</h4>
                            <button><img src='\assets\arrow-up.svg' alt='img' className='img-fluid' />Coming Soon</button>
                        </div>
                        <div className='parenttext'>
                            <div className='mainheading'>
                                <p>HOLDERS</p>
                                <h4>Coming Soon</h4>
                            </div>
                            <div className='mainheading'>
                                <p>MARKETCAP</p>
                                <h4>Coming Soon</h4>
                            </div>
                            <div className='mainheading'>
                                <p>VOLUME (24H)</p>
                                <h4>Coming Soon</h4>
                            </div>
                            <div className='mainheading'>
                                <p>Liquidity</p>
                                <h4>Coming Soon</h4>
                            </div>
                        </div>
                        <div className='mainimage'>
                            <img src='\assets\graph.svg' alt='img' className='img-fluid ' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teaswap