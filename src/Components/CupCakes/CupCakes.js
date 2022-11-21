import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaRegStar } from 'react-icons/fa'

function CupCakes({ cupCakes }) {
    return (
        <Container fluid>
            <div className='cupcakes'>
                <Container className='cupcake-article'>
                    <div className='cupcake-banner'>
                    </div>


                    <div className='cupcake-products'>
                        <Row>
                            <Col>
                                <div className='mod-title'>
                                    <h3>Latest products</h3>
                                </div>
                                <>
                                    {
                                        cupCakes.slice(0, 4).map((cup) => (
                                            <div className='mod-prod d-flex justify-content-between align-items-flex-start' key={cup.id}>
                                                <img src={cup.ccimg} alt={cup.title} />
                                                <div>
                                                    <div>
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                    </div>
                                                    <a href="">{cup.title}</a>
                                                    <h5>{cup.price}</h5>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </>
                            </Col>


                            <Col>
                                <div className='mod-title'>
                                    <h3>
                                        Col Featured Products</h3>
                                </div>
                                <>
                                    {
                                        cupCakes.slice(1, 5).map((cup) => (
                                            <div className='mod-prod d-flex justify-content-between align-items-flex-start' key={cup.id}>
                                                <img src={cup.ccimg} alt={cup.title} />
                                                <div>
                                                    <div>
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                    </div>
                                                    <a href="">{cup.title}</a>
                                                    <h5>{cup.price}</h5>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </>
                            </Col>

                            <Col>
                                <div className='mod-title'>
                                    <h3>Latest products</h3>
                                </div>
                                <>
                                    {
                                        cupCakes.slice(0,4).map((cup) => (
                                            <div className='mod-prod d-flex justify-content-between align-items-flex-start' key={cup.id}>
                                                <img src={cup.img} alt={cup.title} />
                                                <div>
                                                    <div>
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                    </div>
                                                    <a href="">{cup.title}</a>
                                                    <h5>{cup.price}</h5>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </>
                            </Col>
                        </Row>
                    </div>
                </Container>


            </div>
        </Container>
    )
}

export default CupCakes