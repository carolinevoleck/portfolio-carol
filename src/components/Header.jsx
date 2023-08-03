import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles.css/Header.css';


function Header() {

    return(
        <header className="header-container">
            <nav className="icons-container">
                <a href="https://github.com/carolinevoleck" target="_blank" rel="noreferrer">
                    <FaGithub className="fa-github"/>
                </a>
                <a href="https://www.linkedin.com/in/caroline-voleck-b8b4a7108/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="fa-linkedin"/>
                </a>
               
            </nav>
            <div className="container-links">
                <Link to="/" className="box">
                    <nav className="home-header">Início</nav>
                </Link>
                <Link to="/projects" className="box">
                    <nav className="projects-header">Projectos</nav>
                </Link>
                <Link to="/cv" className="box">
                    <nav className="cv-header">CV</nav>
                </Link>
            </div>
        </header>
    );
}

export default Header;