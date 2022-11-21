import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function TrendingCakes(cakesz) {

    const trendCakes = cakesz 

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
                           trendCakes.map((cake) => {
                                <Col className='xl-3' key={cake.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={cake.img} />
                                        <Card.Body>
                                            <Card.Title>{cake.title}</Card.Title>
                                            <Card.Text>
                                              ${cake.price}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            })
                        }
                    </Row>


                </Container>
            </div>
        </Container>
    )
}

export default TrendingCakes