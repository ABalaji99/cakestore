import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { blogItems } from '../back/Data/BlogProducts';
import { FaChevronLeft ,FaChevronRight } from 'react-icons/fa';



export default function Blog() {
    return (
        <div>
            <Container>

                 <div className='blog-details'>
                <div className='product-title d-flex justify-content-between align-items-center'>
                    <p className="title-blog">Selections from Our BLog</p>
                    <div>
                       <button type=""><FaChevronLeft/></button>
                       <button type=""><FaChevronRight/></button>
                    </div>
                </div>
       
              <Carousel slide={true}>
                    <Carousel.Item>
                        <Row>
                            {
                                blogItems.slice(0, 4).map((items) => (
                                    <Col key={items.id}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={items.img} />
                                            <Card.Body>
                                                <Card.Title>{items.head}</Card.Title>
                                                <Card.Text>
                                                    {
                                                        items.para
                                                    }
                                                </Card.Text>
                                             
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }

                        </Row>

                    </Carousel.Item>



                    <Carousel.Item>
                    <Row>
                            {
                                blogItems.slice(4, 8).map((items) => (
                                    <Col key={items.id}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={items.img} />
                                            <Card.Body>
                                            <Card.Title>{items.head}</Card.Title>
                                                <Card.Text>
                                                    {
                                                        items.para
                                                    }
                                                </Card.Text>
                                             
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }

                        </Row>

                    </Carousel.Item>





                    <Carousel.Item>
                    <Row>
                            {
                                blogItems.slice(8,12).map((items) => (
                                    <Col key={items.id}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={items.img} />
                                            <Card.Body>
                                            <Card.Title>{items.head}</Card.Title>
                                                <Card.Text>
                                                    {
                                                        items.para
                                                    }
                                                </Card.Text>
                                             
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }

                        </Row>

                    </Carousel.Item>



                </Carousel>
</div>
            </Container>
        </div>
    )
}
