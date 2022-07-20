import React from 'react'
import './info-nav.css'
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'

const InfoNav = () => {
    return (
        <div>
           <div className="info-nav">
           <span className="info-nav-social">
           <FiFacebook />
           </span>
           <span className="info-nav-social">
            <FiInstagram />
           </span>
           <span className="info-nav-email">dir.planeacion@gdhogaria.com</span>
           </div>
        </div>
    )
}

export default InfoNav