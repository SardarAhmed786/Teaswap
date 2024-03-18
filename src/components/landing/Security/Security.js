import React from 'react'
import "./security.scss"
const Security = () => {
    return (
        <>
            <section className='security'>
                <div className='custom-container'>
                    <div className='innersecurity'>
                        <div className='securityleft wow animate__animated animate__fadeInLeft' data-wow-duration="1s" data-wow-delay="1s">
                            <span className="securityshadeinner"></span>
                            <img src='\assets\sec.svg' alt='img' className='img-fluid' />
                        </div>
                        <div className='securityright wow animate__animated animate__fadeInRight' data-wow-duration="1s" data-wow-delay="1s">
                            <div className='headss'>
                                <h2>Our Security, Your Trust!</h2>
                                <p>TeaSwap is the first decentralized exchange on the DOP protocol. The DOP protocol blockchain provides zero-knowledge transactions on an EVM blockchain, allowing people to have privacy, while maintaining the security and trustless nature of the blockchain. Additionally, TeaSwap uses a liquidity model akin to UniSwap version 2, ensuring stability and efficiency.</p>
           
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='security lowersecurity' id="community">
                <div className='custom-container'>
                    <div className='innersecurity'>
                    <div className='securityright wow animate__animated animate__fadeInLeft' data-wow-duration="1s" data-wow-delay="1s">
                            <div className='headss'>
                                <h2>Community and Governance</h2>
                                <p className='formaxwidth'>TeaSwap launches within the DOP ecosystem with initial governance support, moving towards establishing a DAO for TEA token holders. A future DAO will integrate standard DAO functionality that has proven itself as part of successful decentralized exchanges in the DeFi space.</p>
                   
                             
                                <a href="https://t.me/TeaSwap_org" target="_blank" >    <button className="comunitybtn">Join Community</button></a>
                            </div>
                        </div>
                        <div className='securityleft wow animate__animated animate__fadeInRight' data-wow-duration="1s" data-wow-delay="1s">
                            <span className="securityshadeinner"></span>
                            <img src='\assets\communitymain.svg' alt='img' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Security