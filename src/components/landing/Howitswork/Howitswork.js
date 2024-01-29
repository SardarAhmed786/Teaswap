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
                        <div className='mainheading'>
                            <h2>How It Works</h2>
                            <p>A step-by-step guide on how to use TeaSwap.</p>
                        </div>
                        <div className='workparent'>
                            <div className='mainstep'>
                                <h3>Step 01</h3>
                                <p>Ea dicta illo et aliquid libero cum delectus accusamus! Vel fuga distinctio ut voluptatem eaque sit recusandae tempora qui numquam omnis ratione et voluptatem voluptatem id aliquid labore.</p>
                            </div>
                            <div className='mainstep'>
                                <h3>Step 02</h3>
                                <p>Ea officiis atque sed culpa libero ea odit praesentium ea omnis beatae et consequatur omnis. Ad deleniti digniss et ipsa molestiae et modi consequuntur qui error autem sed corporis blanditiis.</p>
                            </div>
                            <div className='mainstep'>
                                <h3>Step 03</h3>
                                <p>Aut voluptatem iusto eos libero quibusdam id numquam placeat. Non dolores nisi est omnis voluptates est quaerat soluta quo placeat temporibus. Ea soluta deserunt et vero eaque qui magnam ipsa.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Howitswork