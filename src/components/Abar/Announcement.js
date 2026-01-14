import { Container, Navbar } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import './style.css';

const Announcement = () => {
    return (
        <Navbar className='announcement-navbar'>
            <Container className='announcement-container d-flex justify-content-between align-items-center'>
                <div className='announcement-wrapper'>
                    <p className='announcement-text'>FREE SHIPPING AND RETURNS</p>
                    <p className='announcement-text'>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
                    <p className='announcement-text'>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
                </div>
                <CloseButton variant='white'  className='close-btn'/>;
            </Container>
        </Navbar>
    );
};

export default Announcement;
