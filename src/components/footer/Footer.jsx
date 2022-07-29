import React from "react";
import './footer.css';
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="container-contac justify-text">
                        <h4 className="titulo-contacto ">Contactanos:</h4>
                        <div className="iconos-contacto">
                            <i>
                            <AiFillPhone/><a href="https://wa.me/523112413803?text=Hola me podrías brindar información?"> 3112413803</a></i>
                            <i>
                            <MdEmail/><a href="mailto:dir.planeacion@gdhogaria.com"> dir.planeacion@gdhogaria.com</a></i>
                            <i>
                            <SiGooglemaps/><a> Av. Principal #81-A. Los Limones, Tepic, Nayarit.</a></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer