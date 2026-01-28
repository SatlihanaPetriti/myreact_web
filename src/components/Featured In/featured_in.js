import { Container, Row, Col } from 'react-bootstrap';
import './featured_in.css';
import Logo1 from '../../images/brand-13.png';
import Logo2 from '../../images/brand-14.png';
import Logo3 from '../../images/brand-15.png';
import Logo4 from '../../images/brand-16.png';

const FeaturedSection = () => {
    return (
        <Container fluid className='text-center pt-5 pb-5'>
            <div className='featured-title mb-5'>
                AS FEATURED IN
            </div>

            <Row className=' px-5 gx-md-3 gy-md-5'>
                <Col xs={6} md={3}>
                    <img src={Logo1} alt='Logo 1' />
                </Col>

                <Col xs={6} md={3}>
                    <img src={Logo2} alt='Logo 2' />
                </Col>

                <Col xs={6} md={3}>
                    <img src={Logo3} alt='Logo 3' />
                </Col>

                <Col xs={6} md={3}>
                    <img src={Logo4} alt='Logo 4' />
                </Col>
            </Row>
        </Container>

    );
};

export default FeaturedSection;
