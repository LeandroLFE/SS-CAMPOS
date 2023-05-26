import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

interface Props {
  images: string[];
  texts: string[];
}

const Item = ({ image, text }: {image: string, text: string}) => {
  return (
    <div className="item">
      <img src={image} alt={text} />
      <p>{text}</p>
    </div>
  );
}

export default function Carousel ({ images, texts }: Props) {
  const totalSlides = images.length; 
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<Slider>(null);

  const handleSlideChange = (index: number) => {
    if (index === totalSlides - 1 && currentSlide === index - settings.slidesToShow + 1) {
      setCurrentSlide(0); // retorna ao primeiro slide
    } else {
      setCurrentSlide(index); // atualiza o slide normalmente
    }
  }

  return (
    <div className="carousel-container">
      <div className="arrow">
      <FaChevronLeft className="left-arrow" onClick={() => carouselRef.current?.slickPrev()} />
      </div>
      <Slider {...settings} beforeChange={(_, nextSlide) => handleSlideChange(nextSlide)} ref={carouselRef}></Slider>
      <div className="items">
      {images.map((image, index) =>
          index >= currentSlide && index < currentSlide + settings.slidesToShow ? (
            <Item key={index} image={image} text={texts[index]} />
          ) : null
      )}
      </div>
      <div className="arrow">
        <FaChevronRight className="right-arrow" onClick={() => carouselRef.current?.slickNext()} />
      </div>
    </div>
  );
}



/*import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

interface Props {
  images: string[];
  texts: string[];
}

export default function Carousel ({ images, texts }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<Slider>(null);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  }

  return (
    <div className="carousel-container">
      <div className="arrow">
        <FaChevronLeft className="left-arrow" onClick={() => carouselRef.current?.slickPrev()} />
      </div>
      <Slider {...settings} beforeChange={(_, nextSlide) => handleSlideChange(nextSlide)} ref={carouselRef}></Slider>
      <div className="items">
        {images.map((image, index) => (
          <div
            className="item"
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              marginRight: "10px",
              marginLeft: "10px",
              transform: currentSlide === index ? `scale(1.2)` : `none`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <img
              src={image}
              alt={texts[index]}
              className="carousel-image"
              style={{ transform: `scale(${index === currentSlide ? 1.2 : 1})` }}
            />
            <div
              className="overlay"
              style={{
                opacity: index === currentSlide ? 1 : 0.5,
                pointerEvents: index === currentSlide ? 'auto' : 'none',
              }}
            >
              <p className="text">{texts[index]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow">
        <FaChevronRight className="right-arrow" onClick={() => carouselRef.current?.slickNext()} />
      </div>
    </div>
  );
}*/