import React from 'react'
import "./teaswap.scss"
const Teaswap = () => {
    return (
        <>
            <section className='tea'>

                <div className='custom-container'>
                <img src='\assets\leftflower.svg' alt='img' className='leftimg'></img>
                <img src='\assets\rightflower.svg' alt='img' className='rightimg'></img>
                    <div className='maincard'>
                        <div className='upperparent'>
                            <p>TEA Price</p>
                            <h4>$1.6775</h4>
                            <button><img src='\assets\arrow-up.svg' alt='img' className='img-fluid' />2.77%</button>
                        </div>
                        <div className='parenttext'>
                            <div className='mainheading'>
                                <p>HOLDERS</p>
                                <h4>13,383</h4>
                            </div>
                            <div className='mainheading'>
                                <p>MARKETCAP</p>
                                <h4>$111,371,841.95</h4>
                            </div>
                            <div className='mainheading'>
                                <p>VOLUME (24H)</p>
                                <h4>$15,316,019.85</h4>
                            </div>
                            <div className='mainheading'>
                                <p>Liquidity</p>
                                <h4>$2,950,733</h4>
                            </div>
                        </div>
                        <div className='mainimage'>
                            <img src='\assets\swap.svg' alt='img' className='imgf-fluid map'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teaswap