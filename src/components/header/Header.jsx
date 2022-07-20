import React from "react";
import './header.css';
import logo from '../../assets/img-logo-hogaria.png'

const Header = () => {
    return (
        <div>
            <div className="logo-container">
            <img className="logo center" src={logo} alt="Hogaria"/>
            </div>
        </div>
    )
}

export default Header