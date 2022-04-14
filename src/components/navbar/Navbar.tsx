import React from "react";
import Logo  from '../../assets/images/logo.png'
import './Navbar.css'

export default (props :any) => {
    return(
        <header>
            <div className="container">
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
            </div>
        </header>
    )
}