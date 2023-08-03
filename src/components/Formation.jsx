import React from 'react';
import '../styles.css/Formation.css';
import { GiGraduateCap } from 'react-icons/gi';
import { FaBriefcase } from 'react-icons/fa';

function Formation() {
    return (
        <section className="section-formation">
            <h1 className="title-education">Educação</h1>
            <div className="card-education">
                <div className="card-education-date"><span><GiGraduateCap />2023</span></div>
                <div className="card-education-info">Web Full-stack em formação Labenu</div>
            </div>
            <h1 className="title-experience">Experiência</h1>
            <div className="card-experience">
                <div className="card-experience-date"><span><FaBriefcase /> 2019 - 2022</span></div>
                <div className="card-experience-info">Enfermeira</div>
            </div>
        </section>
    );
}
export default Formation;

