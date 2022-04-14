import React from "react";
import Person from '../../assets/images/person.png'
import './Showcase.css'

export default function ShowCase(){
    return(
        <div className="showcase-area">
            <div className="container"> 
                <div className="left">
                    <div className="big-title">
                        <h1>Future is here,</h1>
                        <h1>Start Exploring now.</h1>
                    </div>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus aliquam 
                        tempore reiciendis quibusdam veritatis necessitatibus harum! Blanditiis, amet.
                    </p>
                    <div className="cta">
                        <a href="#" className="btn">Get started</a>
                    </div>
                </div>
                <div className="right">
                    <img src={Person} alt="Person" className="person" />
                </div>
            </div>
        </div>
    )
}