import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Search, Person, Heart, Bag } from 'react-bootstrap-icons';
import logo from '../../images/logo-green.png';
import './menu.css';

const Header = () => {
    return (
        <Navbar expand='lg' className='dropdown-container py-3'>
            <Container>

                {/* Logo */}
                <Navbar.Brand href='#'>
                    <img src={logo} alt='Home Plant Logo' height='20' />
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <div className='home-con'>
                        <Nav className='align-items-center left-menu'>
                            <NavDropdown title='Home'>
                                <NavDropdown.Item>Home 1</NavDropdown.Item>
                                <NavDropdown.Item>Home 2</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title='Shop'>
                                <NavDropdown.Item>Shop One</NavDropdown.Item>
                                <NavDropdown.Item>Shop Two</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title='Products'>
                                <NavDropdown.Item>Product One</NavDropdown.Item>
                                <NavDropdown.Item>Product Two</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title='Pages'>
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
