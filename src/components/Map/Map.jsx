import React from "react";
import './map.css';

const Map = () => {
    return (
        <div>
         <h1>Contacto</h1>
        <div className="container">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.2751844752515!2d-104.87674700000001!3d21.496938599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273716e822877b%3A0x71374399c6a8ccd0!2sAvenida%20Principal%2081a%2C%20Ageuan%20los%20Limones%2C%2063177%20Tepic%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1659058415619!5m2!1ses-419!2smx" 
        width="600" height="300" style={{border:0}} loading="lazy"></iframe>
        </div>
        </div>
       
    )
}

export default Map