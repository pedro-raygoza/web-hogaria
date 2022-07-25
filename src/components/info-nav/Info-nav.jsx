import React from 'react'
import './info-nav.css'
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { AiFillPhone } from 'react-icons/ai'

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
           <span className="info-nav-phone"><AiFillPhone className="info-nav-icon-phone"/> 311 241 38 03</span>
           </div>
        </div>
    )
}

export default InfoNav