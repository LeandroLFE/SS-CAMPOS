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
    image: amantikir,
  },

  { id: 2, 
    text: 'Ducha de<br>Prata', 
    image: duchadeprata 
  },

  { 
    id: 3, 
    text: 'Mirante dos Castelos', 
    image: mirantedoscastelos 
  },

  { 
    id: 4, 
    text: 'Pico do<br>Itapeva', 
    image: picodoitapeva 
  },

  { 
    id: 5, 
    text: 'Vila<br>Holandesa', 
    image: vilaholandesa 
  },

  { 
    id: 6, 
    text: 'Fábrica de Chocolate', 
    image: fabricadechocolate 
  },
];

const Carousel1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      return (prevSlide + 1) % slides.length;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => {
      return (prevSlide - 1 + slides.length) % slides.length;
    });
  };

  const updateCurrentSlide = (index:number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        return (prevSlide + 1) % slides.length;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getSlideIndex = (index:number) => {
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
      <div className="carrossel-envolve">
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
                <p 
                  className={`slide-title ${isCurrent ? 'active' : ''}`} 
                  dangerouslySetInnerHTML={{ __html: slide.text }} 
                />
                </div>
              </div>
            );
          })}
        </div>
        <div className="arrow right-arrow" onClick={nextSlide}>
          <FaChevronRight className="arrow-icon" />
        </div>
      </div>
      <div className="dots">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => updateCurrentSlide(index)}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Carousel1;