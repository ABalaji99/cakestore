import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiSend } from 'react-icons/fi'
import { IoMdRefresh } from 'react-icons/io'
import { GrCreditCard } from 'react-icons/gr'
import { HiSupport } from 'react-icons/hi'
import '../Benifits/Benefits.css'

function Benefits() {
    return (

        <Container fluid>
            <div className='benefits'>
              <Container>
                 <Row>
                    <Col>
                       <div className='content'>
                        <FiSend/>
                        <a href="">
                            <p>Free Worldwide <br /> Shipping</p>
                            <p>on all orders over $95.00</p>
                        </a>
                       </div>

                    </Col>
                    <Col>
                       <div className='content'>
                        <IoMdRefresh/>
                        <a href="">
                            <p>Easy & Fast 30 Days <br /> Returns</p>
                            <p>30 days money back</p>
                        </a>
                       </div>

                    </Col>
                    <Col>
                       <div className='content'>
                        <GrCreditCard/>
                        <a href="">
                            <p>100% Secure Payment <br /> Checkout</p>
                            <p>paypal / mastercard / visa</p>
                        </a>
                       </div>

                    </Col>
                    <Col>
                       <div className='content border-0'>
                        <HiSupport/>
                        <a href="">
                            <p>24/7 Customer Help &  <br />Support</p>
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