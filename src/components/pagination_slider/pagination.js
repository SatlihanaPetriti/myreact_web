import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from "../../images/collection-plant-5.jpg";
import img2 from "../../images/collection-plant-2.jpg";
import img3 from "../../images/collection-plant-3.jpg";
import img4 from "../../images/collection-plant-4.jpg";
import img5 from "../../images/collection-plant-6.jpg";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './pagination.css';

const PaginationSlider = () => {
  const slides = [
    <img src={img1} alt='Slide 1' />,
    <img src={img2} alt='Slide 2' />,
    <img src={img3} alt='Slide 3' />,
    <img src={img4} alt='Slide 4' />,
    <img src={img5} alt='Slide 5' />,

  ];

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      slidesOffsetAfter={0}   
      slidesOffsetBefore={30} 
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className='paginationSwiper'
      breakpoints={{
        20: { slidesPerView: 1, spaceBetween: 4 },
        640: { slidesPerView: 2, spaceBetween: 6 },
        1024: { slidesPerView: 4, spaceBetween: 8 },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PaginationSlider;
