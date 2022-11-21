import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Categories() {
    return (
        <Container>
            <div className='Categories'>
                <Container>
                    <Row>
                        <Col className='col-xl-4'>
                            <h3>Discover Categories Under $150</h3>
                            <p>Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo.</p>\
                            <button type="button">VIEW CATEGORIES</button>
                        </Col>
                        <Col className='col-xl-4'>
                            <img src="../images/c-1.jpg" alt="image" />
                        </Col>
                        <Col className='col-xl-4'>
                            <img src="../images/c-2.jpg" alt="image" />
                        </Col>
                        <Col className='col-xl-4'>
                            <img src="../images/c-3.jpg" alt="image" />
                        </Col>
                        <Col className='col-xl-4'>
                            <img src="../images/c-4.jpg" alt="image" />
                        </Col>
                        <Col className='col-xl-4'>
                            <h3>Newest Arrival 2020
                                Cake & Pastries</h3>
                            <p>Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo.</p>\
                            <button type="button">VIEW CATEGORIES</button>
                        </Col>
                        <Col className='col-xl-4'>
                            <h3>Deals Of The Week
                                Grab Now!</h3>
                            <p>Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo.</p>\
                            <button type="button">VIEW CATEGORIES</button>
                        </Col>
                        <Col className='col-xl-4'>
                            <img src="../images/c-5.jpg" alt="image" />
                        </Col>
                        <Col className='col-xl-4'>
                            <img src="../images/c-6.jpg" alt="image" />
                        </Col>

                    </Row>
                </Container>

            </div>
        </Container>
    )
}

export default Categories