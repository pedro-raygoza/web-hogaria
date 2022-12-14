import React from 'react'
import './projects.css'
import logoImaria from '../../assets/imara-project.jpg'
import imaraPDF from '../../assets/IMARA.pdf'

const Projects = () => {
    return (
        <>
                <h1>Proyectos</h1>
                <div className="container">
                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-image">
                                    <img className="logo center" src={logoImaria} alt="Imaria" />
                                </div>
                                <div className="card-content">
                                    <p className="titulo-proyecto">Imara Entorno Residencial</p>
                                    <p>Imara es un fraccionamiento completamente privado, ubicado en una de las zonas de mayor plusvalía. Tu nuevo Hogar te está esperando.</p>
                                </div>
                                <div className="card-action">
                                    <a href={imaraPDF} target='_blank' rel='noopener noreferrer'>
                                        {""}
                                        Ver mas</a>
                                </div>
                            </div>
                        </div>
                
                </div>
        </>

    )
}

export default Projects