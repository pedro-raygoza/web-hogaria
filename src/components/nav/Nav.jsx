import React from "react";
import "./nav.css";
import {
    Link
} from "react-scroll";

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link activeClass="active" smooth spy to="projects">
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="comingsoon">
                            Proximamente
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="investments">
                            Inversiones
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="contact">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav
