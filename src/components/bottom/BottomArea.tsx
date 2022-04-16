import React from "react";
import './BottomArea.css'

export default function BottomArea({ setProps }: { setProps: any }){
    return(
        <div className="bottom-area">
            <div className="container">
                <button className="toggle-btn">
                    <i onClick={(e) => setProps(0)} className="fa-regular fa-moon"></i>
                    <i onClick={(e) => setProps(1)} className="fa-regular fa-sun"></i>
                </button>
            </div>
        </div>
    )
}