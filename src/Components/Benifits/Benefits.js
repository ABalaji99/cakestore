import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiSend } from 'react-icons/fi'
import { IoMdRefresh } from 'react-icons/io'
import { GrCreditCard } from 'react-icons/gr'
import { HiSupport } from 'react-icons/hi'

function Benefits() {
    return (

        <Container fluid>
            <div className='benefits'>\
              <Container>
                 <Row>
                    <Col>
                       <div className='content d-flex justify-content-between align-items-flex-start'>
                        <FiSend/>
                        <a href="">
                            <p>Free Worldwide Shipping</p>
                            <p>on all orders over $95.00</p>
                        </a>
                       </div>

                    </Col>
                    <Col>
                       <div className='content d-flex justify-content-between align-items-flex-start'>
                        <IoMdRefresh/>
                        <a href="">
                            <p>Easy & Fast 30 Days Returns</p>
                            <p>30 days money back</p>
                        </a>
                       </div>

                    </Col>
                    <Col>
                       <div className='content d-flex justify-content-between align-items-flex-start'>
                        <GrCreditCard/>
                        <a href="">
                            <p>100% Secure Payment Checkout</p>
                            <p>paypal / mastercard / visa</p>
                        </a>
                       </div>

                    </Col>
                    <Col>
                       <div className='content d-flex justify-content-between align-items-flex-start'>
                        <HiSupport/>
                        <a href="">
                            <p>24/7 Customer Help & Support</p>
                            <p>online customer support</p>
                        </a>
                       </div>

                    </Col>
                 </Row>
              </Container>
            </div>
        </Container>

    )
}

export default Benefits