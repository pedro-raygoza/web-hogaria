import React from 'react'
import './projects.css'
import logoImaria from '../../assets/img-logo-imara-green.png'

const Projects = () => {
    return (
        <>
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                        <img className="logo center" src={logoImaria} alt="Imaria"/>
                        <span class="card-title">Card Title</span>
                        </div>
                        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects