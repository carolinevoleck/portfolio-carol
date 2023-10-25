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
                        strings:["Desenvolvedora Full Stack"],
                        autoStart: true,
                        loop: true,
                    
                    }}
                    />
                    </p> 
                    
                <p className="about-p">Formada pelo bootcamp da Labenu,
                 adquiri experiência prática em projetos que abrangem uma ampla gama de tecnologias,
                  incluindo JavaScript, React, TypeScript, NodeJS, SQL, Express, API REST, MySQL, 
                  MongoDB entre outras. Foi nesse cenário
                   que tive meu primeiro contato com o mundo da programação, e desde então, me apaixonei
                    pela ideia de criar soluções inovadoras por meio do desenvolvimento de software. 
                    Com o passar do tempo, essa paixão me fez perceber que meu caminho profissional estava 
                    definitivamente no desenvolvimento web.
                </p>
            </section>
        </main>
    );
}

export default AboutMe;

