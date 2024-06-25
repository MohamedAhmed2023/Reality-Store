
import "./Boxs.css"
import photo1 from "./Image/pexels-fauxels-3183132.jpg"
import photo2 from "./Image/pexels-karolina-grabowska-4498483.jpg"
import photo3 from "./Image/rules-for-interior-designers-1024x656.webp"
import React from 'react';
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';



function Boxs() {
    return (
        <>
            <div className="content-All">
                <div className="container-category">
                    <div className="category">
                        <div className="icon-category">
                            <OpenInNewOutlinedIcon />
                        </div>
                        <div className="content-category">
                            <h4>Fasted Delivery</h4>
                            <p>Delivery in 24/H</p>
                        </div>
                    </div>
                    <div className="category">
                        <div className="icon-category">
                            <EmojiEventsOutlinedIcon />
                        </div>
                        <div className="content-category">
                            <h4>24 Hours Return</h4>
                            <p>100% money-back guarantee</p>
                        </div>
                    </div>
                    <div className="category">
                        <div className="icon-category">
                            <BadgeOutlinedIcon />
                        </div>
                        <div className="content-category">
                            <h4>Secure Payment</h4>
                            <p>Your money is safe</p>
                        </div>
                    </div>
                    <div className="category">
                        <div className="icon-category">
                            <HeadphonesOutlinedIcon />
                        </div>
                        <div className="content-category">
                            <h4>Support 24/7</h4>
                            <p>Live contact/message</p>
                        </div>
                    </div>
                </div >
            </div>

            <div className="container-box1">
                <div class="image-container" id="image1">
                    <img src={photo1} alt="Image1"></img>
                    { }
                </div>

                <div class="image-container" id="image2">
                    <img src={photo2} alt="Image2"></img>
                    { }
                </div>

                <div class="image-container" id="image3">
                    <img src={photo3} alt="Image3"></img>
                    { }
                </div>
            </div >

        </>
    )
}

export default Boxs;

