import React from 'react'
import './coming-soon.css'
import proximo from '../../assets/2.jpg'

const ComingSoon = () => {
    return (
        <>
            <div className="seccion2">
                <div className="container">
                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-image">
                                    <img className="comingSoon" src={proximo} alt="Imaria" />
                                </div>
                                <div className="card-content">
                                    <p className="proximante">Proximante</p>
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

export default ComingSoon