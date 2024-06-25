import React from "react"
import new1 from "./images/1.png"
import new2 from "./images/2.png"
import new3 from "./images/3.png"
import "./News.css"
function News() {
    return (
        <>
            <div className="News-container">
                <h5 className="heading-news">Latest News</h5>
                <div className="News-parent">
                    <div className="News">
                        <div className="News-upper">
                            <img src={new1} alt="" ></img>
                        </div>
                        <div className="News-lower">
                            <div className="icons-News">
                            </div>
                            <h4>Huawei smartwatches are renowned for their combination of elegant design.</h4>
                            <p> making them appealing to a broad audience. These watches are crafted from premium materials such as stainless steel, ceramic, and sapphire glass,</p>
                            <button>Read more</button>
                        </div>
                    </div>
                    <div className="News">
                        <div className="News-upper">
                            <img src={new2} alt="" ></img>
                        </div>
                        <div className="News-lower">
                            <h4>Dell uses a variety of processors from Intel and AMD to power its computers and servers.</h4>
                            <p> The Core series caters to a spectrum of tasks from basic to high-performance computing, while Xeon processors are favored for servers and scalability.</p>
                            <button>Read more
                            </button>
                        </div>
                    </div>
                    <div className="News">
                        <div className="News-upper">
                            <img src={new3} alt="" ></img>
                        </div>
                        <div className="News-lower">
                            <h4>Samsung Mobile, a division of Samsung Electronics, is a leading manufacturer of smartphones and mobile devices.</h4>
                            <p> The company is renowned for its Galaxy series, which includes a wide range of products from budget to premium smartphones</p>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default News;