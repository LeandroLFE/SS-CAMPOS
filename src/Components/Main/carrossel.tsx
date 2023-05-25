import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

interface Props {
  images: string[];
  texts: string[];
}

function Item ({ image, text }: { image: string, text: string }) {
  const [hovered, setHovered] = useState(false);
    
  return (
    <div 
      className="item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={text} className="carousel-image" />
      {hovered && (
        <div className="overlay">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default function Carousel ({ images, texts }: Props) {
  const slidesToShow = 4;
  const infinite = true;

  const [current, setCurrent] = useState(0);

 const prevSlide = () => {
    const length = images.length;
    setCurrent(
      current === 0 ? (infinite ? length - slidesToShow : 0) : current - 1
    );
  };

  const nextSlide = () => {
    const length = images.length;
    setCurrent(
      current === (infinite ? length - slidesToShow : length - 1)
        ? 0
        : current + 1
    );
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      <div className="arrow">
        <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      </div>
      <div className="items">
      {images.map((image, index) =>
          index >= current && index < current + slidesToShow ? (
            <Item key={index} image={image} text={texts[index]} />
          ) : null
      )}
      </div>
      <div className="arrow">
        <FaChevronRight className="right-arrow" onClick={nextSlide} />
      </div>
    </div>
  );
}