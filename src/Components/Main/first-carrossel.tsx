import { useState, useEffect } from 'react';
import './Carousel.css';
import amantikir from '../../assets/Amantikir.png';
import duchadeprata from '../../assets/Ducha-de-prata.png';
import mirantedoscastelos from '../../assets/Mirante-dos-castelos.png';
import picodoitapeva from '../../assets/Pico-do-itapeva.png';
import vilaholandesa from '../../assets/Vila-holandesa.png';
import fabricadechocolate from '../../assets/fabrica-de-chocolate.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  { 
    id: 1, 
    text: 'Parque Amantikir', 
    description: 'O Parque Amantikir é um encantador jardim temático com paisagens deslumbrantes e jardins que representam diferentes partes do mundo.', 
    image: amantikir 
  },

  { id: 2, 
    text: 'Ducha de Prata', 
    description: 'A Ducha de Prata é uma atração turística popular conhecida por suas belas quedas d\'água e paisagens naturais encantadoras.', 
    image: duchadeprata 
  },

  { 
    id: 3, 
    text: 'Mirante dos Castelos', 
    description: 'O Mirante dos Castelos é um ponto turístico famoso que oferece uma vista panorâmica deslumbrante da cidade e das montanhas ao redor.', 
    image: mirantedoscastelos 
  },

  { 
    id: 4, 
    text: 'Pico do Itapeva', 
    description: 'O Pico do Itapeva é um local privilegiado que proporciona uma vista espetacular das montanhas da Serra da Mantiqueira e da região circundante.', 
    image: picodoitapeva 
  },

  { 
    id: 5, 
    text: 'Vila Holandesa', 
    description: 'A Vila Holandesa em Campos do Jordão é um charmoso complexo arquitetônico que remete à cultura e arquitetura típicas da Holanda, com casinhas coloridas, moinhos de vento e belos jardins.', 
    image: vilaholandesa 
  },

  { 
    id: 6, 
    text: 'Fábrica de Chocolate', 
    description: 'A Fábrica de Chocolate em Campos do Jordão é um paraíso para os amantes de chocolate, oferecendo deliciosas opções de doces, bombons e chocolates artesanais.', 
    image: fabricadechocolate 
  },
];

const Carousel1 = () => {
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

export default Carousel1;