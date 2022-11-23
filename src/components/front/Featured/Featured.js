import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { BsFillChatFill } from 'react-icons/bs';
import { MdVisibility } from 'react-icons/md';
import '../Featured/Featured.css'

function Featured({ productItems }) {

    const arr = productItems.slice(0, 6).map(feat => (
        <Col>
            <div>
                <img src={feat.fimg} alt={feat.ftitle} fluid/>
                <div>
                    <a href="">{feat.ftitle}</a>
                    <p >{feat.fsub}</p>
                    <div className='feat-satus-bar d-flex justify-content-between'>
                        <div>
                            <span>{feat.date}</span>
                            <br />
                            <span>{feat.month}</span>
                        </div>
                        <div>
                            <span><BsFillChatFill />{feat.chat}</span>
                            <span> <MdVisibility />{feat.view}</span>

                        </div>
                    </div>
                </div>
            </div>
        </Col>
    ))
    return (
        <Container fluid>
        <div className='Featured'>
            <Container>
            <h2>Featured Posts</h2>
            <p>Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.</p>


            
                <Row className='feat-row'>
                    {arr}

                </Row>

                </Container>
        </div>
        </Container>
    )
}

export default Featured