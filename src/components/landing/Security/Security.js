import React from 'react'
import "./security.scss"
const Security = () => {
    return (
        <>
            <section className='security'>
                <div className='custom-container'>
                    <div className='innersecurity'>
                        <div className='securityleft'>
                            <span className="securityshadeinner"></span>
                            <img src='\assets\sec.svg' alt='img' className='img-fluid' />
                        </div>
                        <div className='securityright'>
                            <div className='headss'>
                                <h2>Security and Trust</h2>
                                <p>At laborum dolorem qui mollitia consequuntur non laudantium aspernatur aut sint voluptas et vitae nesciunt ea repellendus veritatis sit quibusdam omnis! Vel asperiores ullam aut numquam porro vel debitis aspernatur est dignissimos velit.</p>
                                <p>Id officiis nihil et nihil laborum vel internos esse et dolorem soluta. Ut accusantium aliquam cum suscipit aspernatur a aspernatur vitae vel nihil cumque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='security lowersecurity' id="community">
                <div className='custom-container'>
                    <div className='innersecurity'>
                    <div className='securityright'>
                            <div className='headss'>
                                <h2>Community and Governance</h2>
                                <p>At laborum dolorem qui mollitia consequuntur non laudantium aspernatur aut sint voluptas et vitae nesciunt ea repellendus veritatis sit quibusdam omnis! Vel asperiores ullam aut numquam porro vel debitis aspernatur est dignissimos velit.</p>
                                <p>Id officiis nihil et nihil laborum vel internos esse et dolorem soluta. Ut accusantium aliquam cum suscipit aspernatur a aspernatur vitae vel nihil cumque.</p>
                                <button className="comunitybtn">Join Community</button>
                            </div>
                        </div>
                        <div className='securityleft'>
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