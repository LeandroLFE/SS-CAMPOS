import { useState, useEffect } from 'react';
import './Carousel.css';
import SansSouciBistro from '../../assets/Sans-Souci-Bistro.png';
import Linhadotrem from '../../assets/Linha-do-trem.png';
import CabineInglesa from '../../assets/Cabine-Inglesa.png';
import PontedoGuardaChuva from '../../assets/Ponte-do-Guarda-Chuva.png';
import mirantedoscastelos from '../../assets/Mirante-dos-castelos.png';
import picodoitapeva from '../../assets/Pico-do-itapeva.png';
import Vilaholandesa from '../../assets/Vila-holandesa.png';
import fabricadechocolate from '../../assets/fabrica-de-chocolate.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  { 
    id: 1, 
    text: 'Sans Souci Bistrô', 
    description: 'O Sans Souci Bistrô é um encantador refúgio gastronômico que combina a elegância francesa com a beleza da cidade. Com sua atmosfera acolhedora e pratos sofisticados.', 
    image: SansSouciBistro 
  },

  { 
    id: 2, 
    text: 'Linha do Trem', 
    description: 'A Linha do Trem em Campos do Jordão é uma pitoresca e charmosa ferrovia que percorre a Serra da Mantiqueira. Com paisagens deslumbrantes e um passeio tranquilo, a linha oferece aos visitantes uma viagem única, repleta de encantos naturais e históricos.', 
    image: Linhadotrem 
  },

  { 
    id: 3, 
    text: 'Cabine Inglesa', 
    description: 'A Cabine Inglesa em Campos do Jordão é uma peculiar e nostálgica cabine telefônica vermelha que remete ao icônico símbolo britânico.', 
    image: CabineInglesa 
  },

  { 
    id: 4, 
    text: 'Ponte do Guarda Chuva', 
    description: 'A Ponte do Guarda Chuva é uma encantadora passarela suspensa que ganhou esse nome devido à sua peculiar decoração com inúmeros guarda-chuvas coloridos. ', 
    image: PontedoGuardaChuva 
  },

  { 
    id: 5, 
    text: 'Mirante dos Castelos', 
    description: 'O Mirante dos Castelos é um ponto turístico famoso que oferece uma vista panorâmica deslumbrante da cidade e das montanhas ao redor.', 
    image: mirantedoscastelos 
  },

  { 
    id: 6, 
    text: 'Pico do Itapeva', 
    description: 'O Pico do Itapeva é um local privilegiado que proporciona uma vista espetacular das montanhas da Serra da Mantiqueira e da região circundante.', 
    image: picodoitapeva 
  },

  { 
    id: 7, 
    text: 'Vila Holandesa', 
    description: 'A Vila Holandesa em Campos do Jordão é um charmoso complexo arquitetônico que remete à cultura e arquitetura típicas da Holanda, com casinhas coloridas, moinhos de vento e belos jardins.', 
    image: Vilaholandesa 
  },

  { 
    id: 8, 
    text: 'Fábrica de Chocolate', 
    description: 'A Fábrica de Chocolate em Campos do Jordão é um paraíso para os amantes de chocolate, oferecendo deliciosas opções de doces, bombons e chocolates artesanais.', 
    image: fabricadechocolate 
  },
];

const Carousel2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getSlideIndex = (index: number) => {
    if (index < 0) {
      return slides.length - Math.abs(index);
    }
    if (index >= slides.length) {
      return index % slides.length;
    }
    return index;
  };

  const visibleSlides = [
    getSlideIndex(currentSlide - 1),
    currentSlide,
    getSlideIndex(currentSlide + 1),
    getSlideIndex(currentSlide + 2),
  ];

  return (
    <div className="carousel-container">
      <div className="arrow left-arrow" onClick={prevSlide}>
        <FaChevronLeft className="arrow-icon" />
      </div>
      <div className="carousel">
        {visibleSlides.map((slideIndex, index) => {
          const slide = slides[slideIndex];
          const isCurrent = index === 1;
          return (
            <div key={slide.id} className={`slide ${isCurrent ? 'active' : ''}`}>
              <img src={slide.image} alt={`Slide ${slide.id}`} />
              <div className="slide-content">
                <h2 className={`slide-title ${isCurrent ? 'active' : ''}`}>{slide.text}</h2>
                <p className={`slide-description ${isCurrent ? 'active' : ''}`}>{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="arrow right-arrow" onClick={nextSlide}>
        <FaChevronRight className="arrow-icon" />
      </div>
    </div>
  );
};

export default Carousel2;