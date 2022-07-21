import React from 'react'
import './projects.css'
import proyec from '../../assets/imara-verde.png'

const Projects = () => {
    return (
    <div>
        <div className="container">
            <h1 className="titulo">Proyectos</h1>
            <div className="card">
            <img className="imara-logo" src={proyec} alt="Imara"/>
                <h4>Casa Habitacion</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#">Leer mas</a>
            </div>
        </div>
    </div> 
    )
}

export default Projects