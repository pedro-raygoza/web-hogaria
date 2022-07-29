import React from 'react'
import './info-nav.css'
import { FiFacebook } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
const InfoNav = () => {
    return (
           <div className="info-nav">
           <a className="info-nav-social" href="https://www.facebook.com/gdhogaria">
           <FiFacebook />
           </a>
           <a className="info-nav-social" href="https://www.instagram.com/gdhogaria">
           <BsInstagram />
           </a>
           <a className="info-nav-phone" href="https://wa.me/523112413803?text=Hola me podrías brindar información?">
           <BsWhatsapp className="icon-whatsap"/> 311 241 38 03
            </a>
           </div>
    )
}

export default InfoNav