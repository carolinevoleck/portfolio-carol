import React from 'react';
import AboutMe from '../components/AboutMe';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Formation from '../components/Formation';
import Footer from '../components/Footer';
import '../styles.css/Main.css';

function Main() {
    return(
        <main>
            <div className='fundo'>
            <Header />
            <AboutMe />
            <Skills />
            <Formation />
            <Footer />
            </div>
        </main>
    );
}


export default Main;
