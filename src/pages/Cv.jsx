import React from 'react';
import Header from '../components/Header';
import Typewriter from "typewriter-effect";
import avatar from '../assets/images/avatar.png';
import Footer from '../components/Footer';
import '../styles.css/Cv.css'

function Cv() {
    return (
        <main>
            <Header />
            <main className="main-about-me">
                <div className="img-container">
                    <img
                        className="hero-photo"
                        src={avatar}
                        alt="Foto da Carol"
                    />
                </div>
                <section className="section-about-me">
                    <h1 className="name-about">
                        <Typewriter
                            options={{
                                strings: ["Caroline Voleck"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className="about-p">
                        <Typewriter
                            options={{
                                strings: ["Sobre mim..."],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>

                    <p className="about-p">Sou Desenvolvedora Web Full Stack com 
                    experiência prática em diversos projetos. Durante minha jornada, 
                    adquiri habilidades em uma ampla gama de tecnologias, incluindo ReactJS,
                     Node.js, Express, TypeScript, API REST, MySQL, MongoDB e muito mais.

                    Minha trajetória profissional teve início na área de enfermagem,
                     onde obtive uma valiosa experiência. Foi durante esse período que
                      tive meu primeiro contato com a programação e me apaixonei pela 
                      ideia de criar soluções por meio do desenvolvimento de software.

                    À medida que o tempo passou, percebi que queria direcionar minha 
                    carreira para o desenvolvimento web. Foi então que decidi me inscrever 
                    no bootcamp da Labenu para aprimorar ainda mais minhas habilidades.
                     Durante o curso, tive a oportunidade de aprender e aprimorar meus 
                     conhecimentos por meio de exercícios desafiadores e projetos práticos.

                    Agora, estou focada e determinada a seguir minha carreira como 
                    Desenvolvedora Web Full Stack, aplicando o que aprendi para criar 
                    soluções inovadoras e impactantes. Estou entusiasmada com as possibilidades
                     que o mundo da tecnologia oferece e estou comprometida em continuar aprendendo e
                      crescendo como profissional.
                    </p>
                </section>
            </main>

            <h1 className="title-experience">Formação</h1>
            <div className="card-experience">
                <div className="card-experience-date">
                </div>
                <div className="card-experience-info">Labenu programa com mais de 1000 horas de
                 experiência prática em desenvolvimento Full-stack, guiadas por metodologias ágeis (Kanban/Scrum).
                </div>
            </div>
            <div className="card-experience">
                <div className="card-experience-date">
                </div>
                <div className="card-experience-info">Design (UX) em formação pelo Google.
                 Designers de experiência do usuário (UX) têm como foco a experiência de usuários 
                 que utilizam produtos como sites, apps e objetos físicos. Eles tornam essas interações 
                 diárias práticas, agradáveis e acessíveis.
                </div>
                
            </div>
            <div className="card-experience">
                <div className="card-experience-date">
                </div>
                <div className="card-experience-info">Análise e desenvolvimento de sistemas, desempenha 
                um papel fundamental em empresas e organizações modernas. Profissionais bem treinados 
                em Análise e Desenvolvimento de Sistemas são essenciais para criar e manter sistemas de 
                software eficientes e seguros.
                </div>
            </div>

            <h1 className="title-experience">Soft Skills</h1>
            <div className="card-experience">
                <div className="card-experience-date">
                </div>
                <div className="card-experience-info">Minha criatividade é uma das minhas maiores forças,
                 sempre buscando soluções inovadoras para os desafios que surgem. Além disso, possuo uma 
                 habilidade natural para me comunicar de forma clara e eficaz, o que me permite trabalhar
                  em equipe de maneira harmoniosa e produtiva. Estou ansiosa para colocar minhas habilidades 
                  à disposição e alcançar novos patamares de sucesso em minha carreira. Acredito que, juntos, 
                  oderemos alcançar resultados incríveis e impulsionar o crescimento da equipe e da empresa.
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Cv;
