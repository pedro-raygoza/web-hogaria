import React from 'react'
import './coming-soon.css'
import proximo from '../../assets/coming-soon.png'

const ComingSoon = () => {
    return (
        <>
            <h1>Proximamente</h1>
                <div className="container">
                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-image">
                                    <img className="comingSoon" src={proximo} alt="Imaria" />
                                </div>
                                <div className="card-content">
                                    <p className="proximante">El Faro Residencial</p>
                                    <p>El Faro Residencial es un conjunto habitacional turístico residencial ubicado en la Bahía de Matanchen. Tu nuevo Hogar te está esperando.</p>
                                </div>
                            </div>
                        </div>
                
                </div>
        </>
    )
}

export default ComingSoon