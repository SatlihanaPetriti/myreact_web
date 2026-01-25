import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import img1 from '../../images/plant_slide_1.jpg';
import img2 from '../../images/plant_slide_2.jpg';
import img3 from '../../images/plant_slide_3.jpg';
import './carousel.css';
import '../../Pages/Home/index.css';

const CarouselBootstrap = () => {
  return (
    <div className='carousel-wrapper'>
      <Carousel controls={false}>
        {/* First Slide */}
        <Carousel.Item interval={1500}>
          <img src={img1} alt='First slide' className='d-block w-100' />
          <div className='carousel-button-wrapper'>
            <Button className='custom-carousel-btn' size='lg'>
              Shop Collection <span className='btn-arrow'>&gt;</span>
            </Button>
          </div>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item interval={1500}>
          <img src={img2} alt='Second slide' className='d-block w-100' />
          <div className='carousel-button-wrapper'>
            <Button className='custom-carousel-btn' size='lg'>
              Shop Collection <span className='btn-arrow'>&gt;</span>
            </Button>
          </div>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item interval={1500}>
          <img src={img3} alt='Third slide' className='d-block w-100' />
          <div className='carousel-button-wrapper'>
            <Button className='custom-carousel-btn' size='lg'>
              Shop Collection <span className='btn-arrow'>&gt;</span>
            </Button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBootstrap;
