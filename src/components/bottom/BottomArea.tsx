import React from "react";
import './BottomArea.css'

export default function BottomArea(){
    return(
        <div className="bottom-area">
            <div className="container">
                <button className="toggle-btn">
                    <i className="fa-regular fa-moon"></i>
                    <i className="fa-regular fa-sun"></i>
                </button>
            </div>
        </div>
    )
}