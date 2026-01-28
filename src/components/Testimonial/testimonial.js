import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { ChevronLeft, ChevronRight, StarFill } from 'react-bootstrap-icons';
import { MdOutlineFormatQuote } from 'react-icons/md';
import test1 from '../../images/plant-testi1.jpg';
import test2 from '../../images/plant-testi2.jpg';
import './testimonial.css';
import '../../Pages/Home/index.css';

const TestimonialSection = () => {
  return (
    <section className='testimonial-section'>
      <Container fluid>
        <Container className='edit-container py-5 px-5'>
          <Carousel
            controls
            indicators={false}
            interval={null}
            prevIcon={
              <span className='carousel-control-prev-icon'>
                <ChevronLeft size={28} />
              </span>
            }
            nextIcon={
              <span className='carousel-control-next-icon'>
                <ChevronRight size={28} />
              </span>
            }
          >
            {/* TESTIMONIAL 1 */}
            <Carousel.Item>
              <Row>
                <Col xs={12} md={7} className='text-white'>
                  <div className='icon-position mb-3'>
                    <MdOutlineFormatQuote size={46} color='currentColor' />
                  </div>

                  <div className='testimonial-heading mb-3'>
                    OUR CUSTOMER&apos;S RAVE REVIEWS
                  </div>

                  <div className='star-rating mb-3'>
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                  </div>

                  <p className='testimonial-text mb-3'>
                    I've ordered from a lot of places, a lot! and I must say that
                    this place here has the best shipping experience ever.
                    Thank you guys so much for this ♥️
                  </p>

                  <div className='author-info'>
                    <div className='author-name'>Vincent Pahm</div>
                    <div className='purchase-item'>
                      Purchase item: <span>Aglaonema Siam</span>
                    </div>
                  </div>
                </Col>

                <Col xs={12} md={5}>
                  <div className='image-1 image-zoom'>
                    <img
                      src={test1}
                      alt='Testimonial Vincent'
                      className='img-fluid testimonial-images'
                    />
                  </div>
                </Col>
              </Row>
            </Carousel.Item>

            {/* TESTIMONIAL 2 */}
            <Carousel.Item>
              <Row>
                <Col xs={12} md={7} className='text-white'>
                  <div className='icon-position mb-3'>
                    <MdOutlineFormatQuote size={100} color='currentColor' />
                  </div>

                  <div className='testimonial-heading mb-3'>
                    OUR CUSTOMER&apos;S RAVE REVIEWS
                  </div>

                  <div className='star-rating mb-3'>
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                  </div>

                  <p className='testimonial-text mb-3'>
                    Love my new indoor plant! It arrived healthy and adds a
                    refreshing touch to my home. Super easy to care for, highly
                    recommended!
                  </p>

                  <div className='author-info'>
                    <div className='author-name'>Robert Smith</div>
                    <div className='purchase-item'>
                      Purchase item: <span>Baby Stroller with Ride-Along Board</span>
                    </div>
                  </div>
                </Col>

                <Col xs={12} md={5}>
                  <div className='image-1 image-zoom'>
                    <img
                      src={test2}
                      alt='Testimonial Robert'
                      className='img-fluid testimonial-images'
                    />
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </section>
  );
};

export default TestimonialSection;
