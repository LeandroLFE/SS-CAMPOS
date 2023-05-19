import * as React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StyledSlider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import '../../pages/Inicio/style';

type CarouselProps = {
    images: string[];
    texts: string[];
};

const PrevArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <FaAngleLeft size={24} color="#000" />
    </div>
  );
  
const NextArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => (
<div className="slick-arrow slick-next" onClick={onClick}>
    <FaAngleRight size={24} color="#000" />
</div>
);

const renderSlides = (images: string[], texts: string[]) => {
return images.map((image, index) => (
    <div key={image}>
    <div className="carousel-item">
        <img src={image} alt="carousel item" />
        <div className="caption">{texts[index]}</div>
    </div>
    </div>
));
};

export const Carousel: React.FC<CarouselProps> = ({ images, texts }) => {
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
};

return <StyledSlider {...settings}>{renderSlides(images, texts)}</StyledSlider>;
};