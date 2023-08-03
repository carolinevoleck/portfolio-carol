import React from 'react';
import guilhermePhoto from '../assets/images/guilherme-photo.jpeg';
import '../styles.css/AboutMe.css';
import Typewriter from "typewriter-effect";

function AboutMe() {

    return(
        <main className="main-about-me">
            <div className="img-container">
                <img 
                    className="hero-photo"
                    src={guilhermePhoto}
                    alt="Foto do Carol"
                />
            </div>
            <section className="section-about-me">
                <h1 className="name-about">
                <Typewriter
                    options={{
                        strings:["Caroline Voleck"],
                        autoStart: true,
                        loop: true,
                    
                    }}
                    />
                </h1>
                <p className="about-p">
                    <Typewriter
                    options={{
                        strings:["Desenvolvedora Front End"],
                        autoStart: true,
                        loop: true,
                    
                    }}
                    />
                    </p> 
                    
                <p className="about-p">Formada pelo bootcamp da Labenu. Possuo experiência prática em projetos que envolvem diversas tecnologias, como JavaScript, React, TypeScript, NodeJS, SQL, entre outras. E nesta oportunidade tive o primeiro contato com a área de programação, e fiquei apaixonada pela ideia de criar soluções através do desenvolvimento de software. E com o passar do tempo, isso me fez perceber que gostaria de me dedicar profissionalmente ao desenvolvimento web.
                </p>
            </section>
        </main>
    );
}

export default AboutMe;

