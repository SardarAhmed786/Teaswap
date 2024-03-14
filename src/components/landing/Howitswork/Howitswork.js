import React from 'react'
import "./howitswork.scss"
const Howitswork = () => {
    return (
        <>
            <section className='howitswork' id="how">
                <img src="\assets\howmainimg.png" alt="howleftimg" className="howleftimg" />
                <span className="howshadeleft"></span>
                <span className="howshaderight"></span>
                <div className='custom-container'>
                    <div className='parentcard'>
                        <div className='mainheading wow animate__animated animate__fadeIn' data-wow-duration="1s" data-wow-delay="1s">
                            <h2>How It Works</h2>
                            <p>TeaSwap, a decentralized exchange, empowers users with full control over their funds. Here’s how it works:</p>
                        </div>
                        <div className='workparent'>
                            <div className='mainstep wow animate__animated animate__zoomIn' data-wow-duration="1s" data-wow-delay="1s">
                                <h3>Decentralized Liquidity</h3>
                                <p>DEXs like TeaSwap utilize AMMs to provide liquidity through LPs, allowing market makers to offer liquidity based on smart contract conditions, ensuring optimal pricing.</p>
                            </div>
                            <div className='mainstep wow animate__animated animate__zoomIn' data-wow-duration="1s" data-wow-delay="1s">
                                <h3>Advantages Over CEXs</h3>
                                <p>DEXs maintain users' control over funds, unlike centralized exchanges (CEXs) prone to risks like mismanagement or hacks. With DEXs, users hold their own funds, enhancing security and eliminating custodial liabilities.</p>
                            </div>
                            <div className='mainstep wow animate__animated animate__zoomIn' data-wow-duration="1s" data-wow-delay="1s">
                                <h3>Importance of DEXs</h3>
                                <p>DEXs are vital for token economics, offering flexibility, configurability, and governance structures. While traditional exchanges lack privacy, TeaSwap, built on the DOP protocol, integrates ZK and privacy features, restoring users' rights to privacy in crypto transactions.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Howitswork