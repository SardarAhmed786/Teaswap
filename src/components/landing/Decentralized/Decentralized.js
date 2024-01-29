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
                                <h3>Fully decentralized. Completely secure.</h3>
                                <p>At laborum dolorem qui mollitia consequuntur non laudantium aspernatur aut sint voluptas et vitae nesciunt ea repellendus veritatis sit quibusdam omnis! Vel asperiores ullam aut numquam porro vel debitis aspernatur est dignissimos velit.
                                </p>
                                <p>
                                    Id officiis nihil et nihil laborum vel internos esse et dolorem soluta. Ut accusantium aliquam cum suscipit aspernatur a aspernatur vitae vel nihil cumque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Decentralized