import React from 'react'
import './partners.scss'

const Partners = () => {
    return (
        <section className="partnersmain">
            <div className="custom-container">
                <h4 className='partnerhead wow animate__animated animate__fadeIn' data-wow-duration="1s" data-wow-delay="1s">Partners</h4>
                <div className='innerpartners wow animate__animated animate__fadeInUp' data-wow-duration="1s" data-wow-delay="1s">
                    <div className="partnercard">
                        <img src="\assets\partnerone.svg" alt="img" className='img-fluid' />
                    </div>
                    <div className="partnercard">
                    <img src="\assets\partnertwo.svg" alt="img" className='img-fluid' />
                    </div>
                    <div className="partnercard">
                    <img src="\assets\partnerthree.svg" alt="img" className='img-fluid' />
                    </div>
                    <div className="partnercard">
                    <img src="\assets\partnerfour.svg" alt="img" className='img-fluid' />
                    </div>
                    <div className="partnercard">
                    <img src="\assets\partnerfive.svg" alt="img" className='img-fluid' />
                    </div>
                    <div className="partnercard">
                    <img src="\assets\partnersix.svg" alt="img" className='img-fluid' />
                    </div>
                    <div className="partnercard">
                    <img src="\assets\partnerseven.svg" alt="img" className='img-fluid' />
                    </div>
                    <div className="partnercard">
                    <img src="\assets\partnereight.svg" alt="img" className='img-fluid' />
                    </div>
                    <div className="partnercard">
                    <img src="\assets\partnernine.svg" alt="img" className='img-fluid' />
                    </div>
                    <div className="partnercard">
                    <img src="\assets\partnerten.svg" alt="img" className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners