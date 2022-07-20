import React from 'react'
import './nav.css'
import { AiFillPhone } from 'react-icons/ai'
import logo from '../../assets/img-logo.png'


const Nav = () => {
    return (
        <div>
            <div className="nav">
                <img className="nav-logo" src={logo} alt="Hogaria"/>
                <span>Inicio</span>
                <span>Servicios</span>
                <span>Proximamente</span>
                <span>Inversiones</span>
                <span>Contacto</span>
                <span className="nav-phone"><AiFillPhone className="nav-icon-phone"/>311 241 38 03</span>
            </div>
        </div>
    )
}

export default Nav