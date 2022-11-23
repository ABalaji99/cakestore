import React from 'react'
import { AiFillRightCircle } from 'react-icons/ai'
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
import { Row ,Col, Container} from 'react-bootstrap';
import '../Footer/Footer.css'

function Foot() {

    let date = new Date();
    let year = date.getFullYear()
    return (
        <footer>
            <Container>
            <div className='footer-head d-flex justify-content-between'>
                <img src="../images/logo.png" alt="cake store" />

                <form>
                    <input type="email" name="mail" value="" />
                    <label for="">subscribe <AiFillRightCircle /></label>
                </form>

                <div className='icons'>
                    <span><FiFacebook /> <a href="">Facebook</a></span>
                    <span><FiInstagram /> <a href="">Instagram</a></span>
                    <span><CiTwitter /> <a href="">Twitter</a></span>

                </div>
            </div>

            <Row>
                <Col>
                    <h4>Guide & Help</h4>
                    <ul>
                        <li><a href="">Getting Started</a></li>
                        <li><a href="">Returns</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Buying Guide</a></li>s
                        <li><a href="">Customer Service</a></li>
                    </ul>
                </Col>
                <Col>
                    <h4>My Account</h4>
                    <ul>
                        <li><a href="">Brands</a></li>
                        <li><a href="">Gift Certificates</a></li>
                        <li><a href=""> Affiliates</a></li>
                        <li><a href="">Specials</a></li>
                        <li><a href="">FAQs</a></li>
                    </ul>
                </Col>
                <Col>
                    <h4>Information</h4>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Warranty And Services</a></li>
                        <li><a href="">Support 24/7 page </a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </Col>
                <Col>
                    <h4>Follow Us On Instagram</h4>
                     <div className='grd'>
                        <img src="../images/cc1.jpg" alt=""/>
                        <img src="../images/cc2.jpg" alt=""/>
                        <img src="../images/cc3.jpg" alt=""/>
                        <img src="../images/cc4.jpg" alt=""/>
                        <img src="../images/cc5.jpg" alt=""/>
                        <img src="../images/c-1.jpg" alt=""/>
                        <img src="../images/c-2.jpg" alt=""/>
                        <img src="../images/c-3.jpg" alt=""/>
                        <img src="../images/c-4.jpg" alt=""/>
                        
                     </div>
                </Col>
            </Row>

            <div  className='f-bottom d-flex justify-content-between'>
              <p>© {year}So CakeShop. Designed by SmartAddons.Com. All Rights Reserved.</p>
              <img src="../images/payment.png" alt="payment" />
            </div>
            </Container>
        </footer>
    )
}

export default Foot