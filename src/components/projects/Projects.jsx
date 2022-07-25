import React from 'react'
import './projects.css'
import logoImaria from '../../assets/img-logo-imara-green.png'

const Projects = () => {
    return (
        <>
            <div className="seccion">
                <div className="container">
                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-image">
                                    <img className="logo center" src={logoImaria} alt="Imaria" />
                                    <span className="card-title">Proyectos</span>
                                </div>
                                <div className="card-content">
                                    <p className="titulo-proyecto">IMARA</p>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                
                </div>
            </div>
        </>

    )
}

export default Projects