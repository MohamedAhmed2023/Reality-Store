
import "./Box2.css"
import React from 'react';
import shop1 from "../image/shop1.png"
import shop2 from "../image/shop2.png"
import shop3 from "../image/shop3.png"
import shop4 from "../image/shop4.png"
import shop5 from "../image/shop5.png"
import shop6 from "../image/shop6.png"
import mac from "../image/mac.png"
import HeadingText from "../HeadingText/HeadingText";


function Box2() {
    return (
        <>
            <div className="contect-mac">
                <div className="container-mac">
                    <div className="mac">
                        <div className="mac-left">
                            <span>SAVE UP TO $200.00</span>
                            <h4>Macbook Pro</h4>
                            <p>Apple M1 Max Chip. 32GB Unified  <br /> Memory, 1TB SSD Storage</p>
                            <button>Shop now</button>
                        </div>
                        <div className="mac-right">
                            <img src={mac} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-shop">
                <HeadingText title="Shop with Categorys" />
                <div className="container-shop">
                    <div className="shop">
                        <div className="shop-image">
                            <img src={shop1} alt=""></img>
                        </div>
                        <p>Computer & Laptop</p>
                    </div>
                    <div className="shop">
                        <div className="shop-image">
                            <img src={shop2} alt=""></img>
                        </div>
                        <p>SmartPhone</p>
                    </div>
                    <div className="shop">
                        <div className="shop-image">
                            <img src={shop3} alt=""></img>
                        </div>
                        <p>Headphones</p>
                    </div>
                    <div className="shop">
                        <div className="shop-image">
                            <img src={shop4} alt=""></img>
                        </div>
                        <p>Accessories</p>
                    </div>
                    <div className="shop">
                        <div className="shop-image">
                            <img src={shop5} alt=""></img>
                        </div>
                        <p>Camera & Photo</p>
                    </div>
                    <div className="shop">
                        <div className="shop-image">
                            <img src={shop6} alt=""></img>
                        </div>
                        <p>TV & Homes</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box2;