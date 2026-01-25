import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import img1 from '../../images/collection-plant-5.jpg';
import img2 from '../../images/collection-plant-2.jpg';
import img3 from '../../images/collection-plant-3.jpg';
import img4 from '../../images/collection-plant-4.jpg';
import img5 from '../../images/collection-plant-6.jpg';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './pagination.css';
import { Container } from 'react-bootstrap';
import '../../Pages/Home/index.css';
import { ArrowRightShort } from 'react-bootstrap-icons';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { Navigation} from 'swiper/modules';


const PaginationSlider = () => {
  const slides = [
    <div className='collection-card'>
      <div className='image-wrapper'>
        <img src={img1} alt='Slide 1' />
        <button className='arrow-btn'>
          <ArrowRightShort size={30} className='rotate-up-right' />
        </button>
      </div>
      <h6 className='mt-3 mb-2'>All Plants</h6>
      <small>14 items</small>

    </div>,
    <div className='collection-card'>
      <div className='image-wrapper'>
        <img src={img2} alt='All Plants' />
        <button className='arrow-btn'>
          <ArrowRightShort size={30} className='rotate-up-right' />
        </button>
      </div>
      <h6 className='mt-3 mb-2'>All Plants</h6>
      <small>14 items</small>
    </div>
    ,
    <div className='collection-card'>
      <div className='image-wrapper'>
        <img src={img3} alt='Slide 3' />
        <button className='arrow-btn'>
          <ArrowRightShort size={30} className='rotate-up-right' />
        </button>
      </div>
      <h6 className='mt-3 mb-2'>All Plants</h6>
      <small>14 items</small>
    </div >,
    <div className='collection-card'>
      <div className='image-wrapper'>
        <img src={img4} alt='Slide 4' />
        <button className='arrow-btn'>
          <ArrowRightShort size={30} className='rotate-up-right' />
        </button>
      </div>
      <h6 className='mt-3 mb-2'>All Plants</h6>
      <small>14 items</small>
    </div>,
    <div className='collection-card'>
      <div className='image-wrapper'>
        <img src={img5} alt='Slide 5' />
        <button className='arrow-btn'>
          <ArrowRightShort size={30} className='rotate-up-right' />
        </button>
      </div>
      <h6 className='mt-3 mb-2'>All Plants</h6>
      <small>14 items</small>
    </div>,
  ];

  return (
    <div className='slider-container'>
      <Container fluid className='p-0 d-flex align-items-center justify-content-between py-5'>
        <h1 className='text-fp m-0'>Shop by Collection</h1>

        <div className='slider-arrows'>
          <button className='slider-arrow prev'>
            <ChevronLeft size={22} />
          </button>
          <button className='slider-arrow next'>
            <ChevronRight size={22} />
          </button>
        </div>
      </Container>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        slidesOffsetBefore={30}
        slidesOffsetAfter={0}
        grabCursor={true}
        freeMode={{ enabled: true, momentum: true }}
        // pagination={{ clickable:false }}
        navigation={{
          prevEl: '.slider-arrow.prev',
          nextEl: '.slider-arrow.next',
        }}
        modules={[FreeMode, Navigation]}
        className='paginationSwiper'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default PaginationSlider;
