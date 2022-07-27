import React from "react";
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneFlip, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="container-contac">
                        <h4 className="titulo-contacto">¡Contactanos!</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className="iconos-contacto">
                            <i>
                            <FontAwesomeIcon icon={faPhoneFlip} /><a href="tel:+3112413803">3112413803</a></i>
                            <i>
                            <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:dir.planeacion@gdhogaria.com">dir.planeacion@gdhogaria.com</a></i>
                            <i>
                            <FontAwesomeIcon icon={faLocationDot} /><a href="#">Av. Principal #81-A. Los Limones, Tepic, Nayarit.</a></i>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            © 2014 Copyright Text
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer