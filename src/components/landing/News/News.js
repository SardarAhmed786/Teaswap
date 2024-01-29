import React from 'react'
import './news.scss'

const News = () => {
    return (
        <section className="newsmain">
            <div className="custom-container">
                <div className="innernews">
                    <div className="newscard">
                        <div className="newscardimg">
                            <img src="\assets\cardone.svg" alt="innernewsimg" className="innernewsimg" />
                        </div>
                        <h6 className="newscardhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        <p className="newscardpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...</p>
                        <div className="newscardbottom">
                            <p className="newsleftpara">Dec 17, 2022</p>
                            <h6 className="newsrighthead">Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M12.3333 2C6.81334 2 2.33334 6.48 2.33334 12C2.33334 17.52 6.81334 22 12.3333 22C17.8533 22 22.3333 17.52 22.3333 12C22.3333 6.48 17.8533 2 12.3333 2ZM16.3633 12.53L13.3633 15.53C13.2133 15.68 13.0233 15.75 12.8333 15.75C12.6433 15.75 12.4533 15.68 12.3033 15.53C12.0133 15.24 12.0133 14.76 12.3033 14.47L14.0233 12.75H8.83334C8.42334 12.75 8.08334 12.41 8.08334 12C8.08334 11.59 8.42334 11.25 8.83334 11.25H14.0233L12.3033 9.53C12.0133 9.24 12.0133 8.76 12.3033 8.47C12.5933 8.18 13.0733 8.18 13.3633 8.47L16.3633 11.47C16.6533 11.76 16.6533 12.24 16.3633 12.53Z" fill="#F40080" />
                                </svg>
                            </h6>
                        </div>
                    </div>
                    <div className="newscard">
                        <div className="newscardimg">
                            <img src="\assets\cardtwo.svg" alt="innernewsimg" className="innernewsimg" />
                        </div>
                        <h6 className="newscardhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        <p className="newscardpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...</p>
                        <div className="newscardbottom">
                            <p className="newsleftpara">Dec 17, 2022</p>
                            <h6 className="newsrighthead">Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M12.3333 2C6.81334 2 2.33334 6.48 2.33334 12C2.33334 17.52 6.81334 22 12.3333 22C17.8533 22 22.3333 17.52 22.3333 12C22.3333 6.48 17.8533 2 12.3333 2ZM16.3633 12.53L13.3633 15.53C13.2133 15.68 13.0233 15.75 12.8333 15.75C12.6433 15.75 12.4533 15.68 12.3033 15.53C12.0133 15.24 12.0133 14.76 12.3033 14.47L14.0233 12.75H8.83334C8.42334 12.75 8.08334 12.41 8.08334 12C8.08334 11.59 8.42334 11.25 8.83334 11.25H14.0233L12.3033 9.53C12.0133 9.24 12.0133 8.76 12.3033 8.47C12.5933 8.18 13.0733 8.18 13.3633 8.47L16.3633 11.47C16.6533 11.76 16.6533 12.24 16.3633 12.53Z" fill="#F40080" />
                                </svg>
                            </h6>
                        </div>
                    </div>
                    <div className="newscard">
                        <div className="newscardimg">
                            <img src="\assets\cardthree.svg" alt="innernewsimg" className="innernewsimg" />
                        </div>
                        <h6 className="newscardhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        <p className="newscardpara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...</p>
                        <div className="newscardbottom">
                            <p className="newsleftpara">Dec 17, 2022</p>
                            <h6 className="newsrighthead">Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M12.3333 2C6.81334 2 2.33334 6.48 2.33334 12C2.33334 17.52 6.81334 22 12.3333 22C17.8533 22 22.3333 17.52 22.3333 12C22.3333 6.48 17.8533 2 12.3333 2ZM16.3633 12.53L13.3633 15.53C13.2133 15.68 13.0233 15.75 12.8333 15.75C12.6433 15.75 12.4533 15.68 12.3033 15.53C12.0133 15.24 12.0133 14.76 12.3033 14.47L14.0233 12.75H8.83334C8.42334 12.75 8.08334 12.41 8.08334 12C8.08334 11.59 8.42334 11.25 8.83334 11.25H14.0233L12.3033 9.53C12.0133 9.24 12.0133 8.76 12.3033 8.47C12.5933 8.18 13.0733 8.18 13.3633 8.47L16.3633 11.47C16.6533 11.76 16.6533 12.24 16.3633 12.53Z" fill="#F40080" />
                                </svg>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News