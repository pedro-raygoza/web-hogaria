import React from 'react'
import './nav.css'
import logo from '../../assets/img-logo.png'


const Nav = () => {
    return (
        <div>

<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><img className="nav-logo" src={logo} alt="Hogaria"/></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Inicio</a></li>
        <li><a href="badges.html">Servicios</a></li>
        <li><a href="collapsible.html">Proximamente</a></li>
        <li><a href="sass.html">Inversiones</a></li>
        <li><a href="badges.html">Contacto</a></li>
      </ul>
    </div>
  </nav>
        </div>
    )
}

export default Nav