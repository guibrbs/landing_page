import React, { useState } from "react";
import Logo  from '../../assets/images/logo.png'
import './Navbar.css'

export default function Navbar(){
    const [menu, setMenu] = useState(0)
    function setDisplay(){
        if(menu){
            setMenu(0)
        }
        else{
            setMenu(1)
        }
    }
    return(
        <header>
            <div className={menu ? "container active" : "container"}>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <h3>Danvo</h3>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="" className="btn">Sign up</a></li>
                    </ul>
                </div>
                <div className="overlay">
                    
                </div>
                <div className="hamburguer-menu" onClick={(e) => setDisplay()}>
                    <div className="bar">

                    </div>
                </div>
            </div>
        </header>
    )
}