import React from "react"
import "./HeadingText.css"
function HeadingText(props) {
    return (
        <>
            <div className="HeadingText">
                <h2 className="h2-Heading">{props.title}</h2>
                <span className="span-Heading"></span>
            </div>
        </>
    )
}

export default HeadingText;