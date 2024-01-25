import React from 'react'
import "./tokenism.scss"
const Tokenism = () => {
    return (
        <>
            <section className='tokenism'>
                <div className='custom-container'>
                    <div className='mainheading'>
                        <h3>Tokenomics at a Glance</h3>
                        <p>At vero eos et accusamus et iEvoluptatum deleniti atque corrupti quos dolores.</p>
                    </div>
                    <div className='parentcardsss'>
                        <div className='left'>
                            <div className='card'>
                                <h2 className='upperhead'>About Token</h2>
                                <div className='parenttext'>
                                <p>Token Name:</p>
                                <h6>TeaSwap</h6>
                            </div>
                            <div className='parenttext'>
                                <p>Token Symbol:</p>
                                <h6>Tea</h6>
                            </div>
                            <div className='parenttext'>
                                <p>Presale Start:</p>
                                <h6>06 July, 2023 03:00</h6>
                            </div>
                            <div className='parenttext'>
                                <p>Presale end:</p>
                                <h6>07 July, 2023 03:00</h6>
                            </div>
                            <div className='parenttext'>
                                <p>Currencies Accepted:</p>
                                <h6>ETH & BNB</h6>
                            </div>
                            <div className='parenttext'>
                                <p>Hard Cap:</p>
                                <h6>180,000,000 TEA</h6>
                            </div>
                            </div>
                         
                        </div>
                        <div className='right'>
                            <div className='card'>
                                <div className='parentsss'>
                                <div className='innerleft'>
                                    <img src='\assets\donut.svg' alt='img' className='img-fluid'/>
                                </div>
                                <div className='innerright'>
                                    <h2>Token Distribution</h2>
                                    <div className='parenttext'>
                                        <p><img src='\assets\circle.svg' alt='img' className='img-fluid'/>Marketing</p>
                                        <h6>24%</h6>
                                    </div>
                                    <div className='parenttext'>
                                        <p><img src='\assets\circle.svg' alt='img' className='img-fluid'/>Reserves</p>
                                        <h6>10%</h6>
                                    </div>
                                    <div className='parenttext'>
                                        <p><img src='\assets\circle.svg' alt='img' className='img-fluid'/>Team</p>
                                        <h6>14%</h6>
                                    </div>
                                </div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tokenism