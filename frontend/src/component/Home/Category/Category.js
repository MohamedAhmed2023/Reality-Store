import React from 'react';
import "./Category.css"
import cat1 from "./image/Image (18).png"
import cat2 from "./image/Image (19).png"
import cat3 from "./image/Image (20).png"
import cat4 from "./image/cat4.png"
import cat5 from "./image/cat5.png"
import cat6 from "./image/cat6.png"
import cat7 from "./image/cat7.png"
import cat8 from "./image/cat8.png"
import cat9 from "./image/cat9.png"
function Sale() {
    return (
        <>
            <div className="Sale-container">
                <div className="Sale-parent">
                    <span>Flash Sale Today</span>
                    <div className="Sale">
                        <div className="Sale-left">
                            <img src={cat1} alt=""></img>
                        </div>
                        <div className="Sale-right">
                            <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear</p>
                            <span>$442.12</span>
                        </div>
                    </div>
                    <div className="Sale">
                        <div className="Sale-left">
                            <img src={cat2} alt=""></img>
                        </div>
                        <div className="Sale-right">
                            <p>Sony DSCHX8 High Zoom Point & Shoot Camera</p>
                            <span>$442.12</span>
                        </div>
                    </div>
                    <div className="Sale">
                        <div className="Sale-left">
                            <img src={cat3} alt=""></img>
                        </div>
                        <div className="Sale-right">
                            <p>4K UHD LED Smart TV with Chromecast Built-in</p>
                            <span>$442.12</span>
                        </div>
                    </div>
                </div>
                <div className="Sale-parent">
                    <span>BEST SELLERS</span>
                    <div className="Sale">
                        <div className="Sale-left">
                            <img src={cat4} alt=""></img>
                        </div>
                        <div className="Sale-right">
                            <p>Samsung Electronics Samsung Galexy S21 5G</p>
                            <span>$1,500</span>
                        </div>
                    </div>
                    <div className="Sale">
                        <div className="Sale-left">
                            <img src={cat5} alt=""></img>
                        </div>
                        <div className="Sale-right">
                            <p>Canon EOS 1500D DSLR Camera Body+ 18-55 mm</p>
                            <span>$1,550</span>
                        </div>
                    </div>
                    <div className="Sale">
                        <div className="Sale-left">
                            <img src={cat6} alt=""></img>
                        </div>
                        <div className="Sale-right">
                            <p>Sony DSCHX8 High Zoom Point & Shoot Camera</p>
                            <span>$4,890</span>
                        </div>
                    </div>
                </div>
                <div className="Sale-parent">
                    <span>TOP RATED</span>
                    <div className="Sale">
                        <div className="Sale-left">
                            <img src={cat7} alt=""></img>
                        </div>
                        <div className="Sale-right">
                            <p>Portable Wshing Machine, 11lbs capacity Model 18NMF...</p>
                            <span>$1,500</span>
                        </div>
                    </div>
                    <div className="Sale">
                        <div className="Sale-left">
                            <img src={cat8} alt=""></img>
                        </div>
                        <div className="Sale-right">
                            <p>Sony DSCHX8 High Zoom Point & Shoot Camera</p>
                            <span>$1,550</span>
                        </div>
                    </div>
                    <div className="Sale">
                        <div className="Sale-left">
                            <img src={cat9} alt=""></img>
                        </div>
                        <div className="Sale-right">
                            <p>Dell Optiplex 7000x7480 All-in-One Computer Monitor</p>
                            <span>$4,890</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Sale;