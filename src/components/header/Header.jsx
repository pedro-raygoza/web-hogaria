import React from "react";
import './header.css';
import logo from '../../assets/img-logo-hogaria.png'

const Header = () => {
    return (
        <>
                <header>
                    <div className="logo-container">
                        <img className="logo center" src={logo} alt="Hogaria" />
                    </div>
                </header>
        </>
    )
}

export default Header