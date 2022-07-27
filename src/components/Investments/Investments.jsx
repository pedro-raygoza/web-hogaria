import React from "react";
import './investments.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhoneFlip, faEnvelope, faLocationDot} from "@fortawesome/free-solid-svg-icons"

const Investments = () => {
    return (
        <div className="invest">
            <h1>Inversiones</h1>
            <span>¿Estas interesado en nuestros productos?<br /> Dejanos tus datos y un asesor se comunicara contigo</span>
            <br /><a className="btn disabled">Ver mas</a>
        </div>
    )
}

export default Investments