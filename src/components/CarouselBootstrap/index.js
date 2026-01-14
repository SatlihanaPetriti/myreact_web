import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import img1 from '../../images/plant_slide_1.jpg';
import img2 from '../../images/plant_slide_2.jpg';
import img3 from '../../images/plant_slide_3.jpg';
import './carousel.css';

const CarouselBootstrap = () => {
    return (
        <div className='carousel-wrapper'>
                <Button className='custom-carousel-btn' size='lg'>
                    Shop collection
                </Button>
            <Carousel>
                <Carousel.Item>
                    <img src={img1} alt='First slide' className='d-block w-100' />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img2} alt='Second slide' className='d-block w-100' />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img3} alt='Third slide' className='d-block w-100' />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselBootstrap;
