import React from 'react';
import Header from '../components/Header';
import Typewriter from "typewriter-effect";
import avatar from '../assets/images/avatar.png';
import Footer from '../components/Footer';

function Cv() {
    return(
        <main>
            <Header />
            <main className="main-about-me">
            <div className="img-container">
                <img 
                    className="hero-photo"
                    src={avatar}
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
                        strings:["Sobre mim..."],
                        autoStart: true,
                        loop: true,
                    
                    }}
                    />
                    </p> 
                    
                <p className="about-p">Desenvolvedora Web Full Stack em formação pelo bootcamp da Labenu com experiência em projetos práticos. Durante minha jornada, adquiri habilidades em tecnologias como ReactJS, API REST, NodeJs, TypeScript e outras. 

                                        Minha primeira formação foi graduação em enfermagem, onde obtive uma valiosa experiência profissional na área. E nesta oportunidade tive o primeiro contato com a área de programação, e fiquei apaixonada pela ideia de criar soluções através do desenvolvimento de software. 

                                        E com o passar do tempo, isso me fez perceber que gostaria de me dedicar profissionalmente ao desenvolvimento web. Foi então que decidi me inscrever no bootcamp da Labenu, buscando aprimorar ainda mais minhas habilidades e focar na carreira de Desenvolvedora Web Full Stack.

                                        No bootcamp de Desenvolvimento Web Full Stack da Labenu, estou tendo a oportunidade de aprender muito e aprimorar meus conhecimentos através de muita prática com exercícios e projetos desafiadores. 
                </p>
            </section>
        </main>

        <h1 className="title-experience">Formação</h1>
            <div className="card-experience">
                <div className="card-experience-date">
                </div>
                <div className="card-experience-info">Labenu programa com mais de 1000 horas de experiência prática em desenvolvimento Full-stack, guiadas por metodologias ágeis (Kanban/Scrum).</div>
            </div>
            <div className="card-experience">
                <div className="card-experience-date">
                </div>
                <div className="card-experience-info">Design (UX) em formação pelo Google. Designers de experiência do usuário (UX) têm como foco a experiência de usuários que utilizam produtos como sites, apps e objetos físicos. Eles tornam essas interações diárias práticas, agradáveis e acessíveis.</div>
            </div>

            <h1 className="title-experience">Soft Skills</h1>
            <div className="card-experience">
                <div className="card-experience-date">
                </div>
                <div className="card-experience-info">Minha criatividade é uma das minhas maiores forças, sempre buscando soluções inovadoras para os desafios que surgem. Além disso, possuo uma habilidade natural para me comunicar de forma clara e eficaz, o que me permite trabalhar em equipe de maneira harmoniosa e produtiva. Estou ansiosa para colocar minhas habilidades à disposição e alcançar novos patamares de sucesso em minha carreira. Acredito que, juntos, poderemos alcançar resultados incríveis e impulsionar o crescimento da equipe e da empresa.</div>
            </div>
            <Footer />

        </main>
    );
}

export default Cv;
