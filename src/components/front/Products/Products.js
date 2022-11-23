import React from 'react';
import '../Products/Products.css'
import { BsGraphUp } from 'react-icons/bs';
import { FaHeart, FaSearch } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Products = ({ productItems, handleAddProduct }) => {


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
                        productItems.map((cook) => (
                            
                                <Col key={cook.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={cook.img} />
                                        <Card.Body>
                                            <Card.Title>{cook.title}</Card.Title>
                                            <Card.Text>
                                               Price : ${cook.price}
                                            </Card.Text>
                                            <div className='btn-group'>
                                               
                                             <button type="button"  onClick={() => handleAddProduct(cook )}>Add to cart</button>
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
        
    );
}

export default Products;
