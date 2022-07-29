import React from "react";
import './investments.css';
import {
    Link
  } from "react-scroll";

const Investments = () => {
    return (
        <div className="invest">
            <h1>Inversiones</h1>
            <h4>¿Estas interesado en nuestros productos?<br /> Dejanos tus datos y un asesor se comunicara contigo</h4>
            <br /><a className="btn">
            <Link activeClass="active" smooth spy to="contact">
              CONTÁCTANOS
            </Link>
            </a>
        </div>
    )
}

export default Investments