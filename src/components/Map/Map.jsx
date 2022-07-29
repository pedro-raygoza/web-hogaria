import React from "react";
import './map.css';

const Map = () => {
    return (
        <div>
         <h1>Contacto</h1>
        <div className="container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.1093929933177!2d-104.892566!3d21.5034347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842736fd50c854c9%3A0xe88f2342a24ad5f5!2sAv%20Insurgentes%20127a%2C%20Centro%2C%2063000%20Tepic%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1659130755907!5m2!1ses-419!2smx" 
        width="600" height="300" style={{border:0}} loading="lazy"></iframe>
        </div>
        </div>
       
    )
}

export default Map