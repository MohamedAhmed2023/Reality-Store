import React from "react"
import "./Newletter.css"
import imgNews from "./images/Logo.png"
function Newletter() {
    return (
        <>
            <div className="Newletter-container">
                <div className="Newletter">
                    <h2>Subscribe to our newsletter</h2>
                    <span>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</span>
                    <div className="News-contect">
                        <input type="email" placeholder="Email address"></input>
                        <button>Subscribe</button>
                    </div>
                    <img src={imgNews} alt="img"></img>
                </div>
            </div>
        </>
    )
}

export default Newletter;