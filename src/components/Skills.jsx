import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaReact, FaJs, FaBootstrap, FaCss3, FaHtml5, FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faAngular } from '@fortawesome/free-brands-svg-icons/faAngular';
import { faNode } from '@fortawesome/free-brands-svg-icons/faNode';
import '../styles.css/Skills.css';

function Skills() {
    const icons = [
        { icon: <FaReact style={{ color: 'rgb(0, 251, 255)' }} /> },
        { icon: <FaHtml5 style={{ color: 'rgb(240, 124, 29)' }} /> },
        { icon: <FaJs style={{ color: 'rgb(228, 217, 17)' }} /> },
        { icon: <FaBootstrap style={{ color: 'rgb(156, 58, 181)' }} /> },
        { icon: <FaCss3 style={{ color: 'rgb(36, 105, 179)' }} /> },
        { icon: <FontAwesomeIcon icon={faDocker} style={{ color: 'rgb(36, 105, 179)' }} /> },
        { icon: <FontAwesomeIcon icon={faDatabase} style={{ color: 'rgb(240, 124, 29)', height: '70px' }} /> },
        { icon: <FontAwesomeIcon icon={faAngular} style={{ color: 'rgba(208, 48, 70, 0.881)', height: '90px' }} /> },
        { icon: <FontAwesomeIcon icon={faNode} style={{ color: 'rgba(39, 38, 38, 0.881)' }} /> },
        { icon: <FaGithub style={{ color: 'rgb(36, 105, 179)' }} /> },
      ];
      

  const sliderRef = useRef(null);

  useEffect(() => {
    // Inicie o carrossel automaticamente após o componente ser montado
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed:4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="slick-list skills-wrapper">
      <h1 className="h1-skills">Habilidades</h1>
      <Slider ref={sliderRef} {...settings}>
      {icons.map((icon, index) => (
  <div key={index}>{icon.icon}</div>
))}

      </Slider>
    </main>
  );
}

export default Skills;
