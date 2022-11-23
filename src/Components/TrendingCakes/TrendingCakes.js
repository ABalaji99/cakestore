import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';

import { BsGraphUp } from 'react-icons/bs';
import { FaHeart, FaSearch } from 'react-icons/fa';






function TrendingCakes({ trendCakes ,handleAdd }) {



    return (
        <Container fluid>
            <div className='trending-cakes'>
                <Container>
                    <h3>
                        Trending Cakes 2020
                        <span>
                            Delicious & Tasty Collections
                        </span>
                    </h3>

                    <Row>
                        {
                            trendCakes.map((cook) => (
                                
                                    <Col key={cook.id}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={cook.img} />
                                            <Card.Body>
                                                <Card.Title>{cook.title}</Card.Title>
                                                <Card.Text>
                                                    ${cook.price}
                                                </Card.Text>
                                                <div className='btn-group'>
                                                   
                                                 <button type="button"  onClick={() => handleAdd(cook )}>Add to cart</button>
                                                    <button type="button"><BsGraphUp /></button>
                                                    <button type="button"><FaHeart /></button>
                                                    <button type="button"><FaSearch /></button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                              
                            ))
                        }
                    </Row>


                </Container>
            </div>
        </Container>
    )
}

export default TrendingCakes