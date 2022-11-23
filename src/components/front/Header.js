import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { GiRss } from 'react-icons/gi';
import { HiShoppingCart } from 'react-icons/hi';
import TopNav from './TopNav/TopNav';

const Header = ({ cartItems }) => {
    return (
        <>

            <div className="header-all">
                <Container fluid px-0>
                    <div className="header-top">


                        <Row>

                            <TopNav />
                        </Row>


                    </div>
                </Container>
                <div className="header-center">
                    <Container fluid>
                        <Row>
                            <Col sm={6} lg={3}>
                                <div className="header-logo">
                                    <Link to="/">
                                        <img src="../images/logo.png" alt="" />
                                    </Link>
                                </div>
                            </Col>
                            <Col sm={6} lg={9}>
                                <div className="header-contact-details">
                                    <Navbar expand="lg" >
                                        <Navbar.Toggle aria-controls="navbarScroll" />
                                        <Navbar.Collapse id="navbarScroll">
                                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                                <ul>
                                                    <li>
                                                        <Link to="/">HOME</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">SHOP DEMO</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">BLOG</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">TEMPLATES</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">LAYOUTS</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">THEME FEATURES</Link>
                                                    </li>

                                                </ul>
                                            </Nav>
                                            <div className="cart-details">

                                                <Link to="/cart" className='cart' title='CART'>
                                                    <HiShoppingCart size={30}/>
                                                    <sup className='cart-lenght'>
                                                        {cartItems.lenght <= 1 ? "" : cartItems.length}
                                                    </sup>
                                                </Link>
                                            </div>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                            </Col>
                        </Row>
                        </Container>
                </div>
            
        </div>

        </>

    )
}


export default Header;