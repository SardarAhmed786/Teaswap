import React from 'react'
import "./decentralized.scss"
import Spline from "@splinetool/react-spline";
const Decentralized = () => {
    return (
        <>

            <section className='decentralized' id="about">
                <div className='custom-container'>
                    <div className='maindecentralized'>

                        <div className='maindecentralizedleft'>
                            <Spline
                                scene="https://prod.spline.design/V8Jy8gzjhd4vzkLv/scene.splinecode"
                            />
                        </div>
                        <div className='maindecentralizedright'>
                            <button className="topbtn wow animate__animated animate__fadeInDown" data-wow-duration="1s" data-wow-delay="1s">About TeaSwap</button>
                            <div className='heading wow animate__animated animate__bounceInRight' data-wow-duration="1s" data-wow-delay="1s">
                                <h3>Decentralized and Security at once!
</h3>
                                <p>TeaSwap, the DOP protocol's decentralized exchange, facilitates token swaps and wraps on an innovative platform. Our wrap holds tokens securely in smart contracts, offering true decentralization. Explore the TeaSwap difference with our experienced DeFi team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Decentralized