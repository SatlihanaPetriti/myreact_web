import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Search, Person, Heart, Bag, ChevronDown } from 'react-bootstrap-icons';
import logo from '../../images/logo-green.png';
import './menu.css';
import '../../Pages/Home/index.css';
import GiantPlant from '../../images/giant_plant.jpg';
import FriendlyPlant from '../../images/friendly_plant.jpg';

const Header = () => {
    const renderDropdownTitle = (title) => (
        <span className='dropdown-title'>
            {title} <ChevronDown size={10} />
        </span>
    );

    return (
        <Navbar expand='lg' className='dropdown-container py-3'>
            <Container fluid className='px-5'>

                {/* Logo */}
                <Navbar.Brand href='#'>
                    <img src={logo} alt='Home Plant Logo' height='20' />
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <div className='home-con'>
                        <Nav className='align-items-center left-menu'>
                            <Nav.Link>Home</Nav.Link>

                            <NavDropdown
                                title={renderDropdownTitle('Plants')}
                                id='plants-dropdown'
                                className='plants-dropdown'
                            >
                                <div className='plants-mega-menu-wrapper'>
                                    <Container fluid className='plants-mega-menu '>
                                        {/* LEFT COLUMN */}
                                        <div className='plants-links'>
                                            <NavDropdown.Item className='mega-item bold-item'>INDOR PLANTS</NavDropdown.Item>
                                            <NavDropdown.Item className='mega-item'>Best Sellers</NavDropdown.Item>
                                            <NavDropdown.Item className='mega-item'>Self-Watering Plants</NavDropdown.Item>
                                            <NavDropdown.Item className='mega-item'>New Arrivals</NavDropdown.Item>
                                            <NavDropdown.Item className='mega-item'>Low-Maintenance Plants</NavDropdown.Item>
                                            <NavDropdown.Item className='mega-item'>Best Houseplants for Low Light</NavDropdown.Item>
                                            <NavDropdown.Item className='mega-item'>Pet-Friendly Plants</NavDropdown.Item>
                                            <NavDropdown.Item className='mega-item'>Cold Weather Plants</NavDropdown.Item>
                                            <NavDropdown.Item className='mega-item'>Air Purifying Plants</NavDropdown.Item>

                                            <NavDropdown.Item className='mega-item shop-all'>
                                                SHOP ALL ITEMS
                                            </NavDropdown.Item>
                                        </div>

                                        {/* RIGHT COLUMN */}
                                        <div className='plants-images'>
                                            <div className='menu-image-card'>
                                                <img src={GiantPlant} alt='Giant Plants' />
                                                <span >GIANT PLANTS</span>
                                            </div>

                                            <div className='menu-image-card'>
                                                <img src={FriendlyPlant} alt='Pet Friendly Plants' />
                                                <span>PET-FRIENDLY PLANTS</span>
                                            </div>
                                        </div>
                                    </Container>
                                </div>
                            </NavDropdown>



                            <NavDropdown title={renderDropdownTitle('Care Tools')}>
                                <NavDropdown.Item>Product One</NavDropdown.Item>
                                <NavDropdown.Item>Product Two</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title={renderDropdownTitle('Learn')}>
                                <NavDropdown.Item>Page One</NavDropdown.Item>
                                <NavDropdown.Item>Page Two</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link>Blog</Nav.Link>
                            <Nav.Link>Buy Now</Nav.Link>
                        </Nav>

                        <div className='right-icons'>
                            <Search size={20} className='icon' />
                            <Person size={20} className='icon' />
                            <Heart size={20} className='icon' />
                            <Bag size={20} className='icon' />
                        </div>
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;



