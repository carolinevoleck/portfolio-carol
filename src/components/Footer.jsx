import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../styles.css/Footer.css';

function Footer() {
    return(
        <section className="container-footer">
            <div className="contact-info">
                <div><span><FaEnvelope /></span> caroline_voleck@hotmail.com</div>
                <div><span><FaPhone /></span> +55 18 99685-6859</div>
                <div><span><FaMapMarkerAlt /></span> Quatá-SP</div>
            </div>
            <div className="social-media">
                <a href="https://github.com/carolinevoleck" target="_blank" rel="noreferrer">
                    <FaGithub className="fa-github"/>
                </a>
                <a href="https://www.linkedin.com/in/caroline-voleck-b8b4a7108/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="fa-linkedin"/>
                </a>
            </div>
            <h4 className="assignature">© 2023 Caroline Voleck - All rights reserved</h4>
               
        </section>
    );
}

export default Footer;
