import React from 'react'
import './projects.css'
import logoImaria from '../../assets/img-logo-imara-green.png'

const Projects = () => {
    return (
        <>
                <h1 className="">Proyectos</h1>
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
                                    <a href="./IMARA 1.pdf" download>
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