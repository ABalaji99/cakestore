
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { HiMenu } from 'react-icons/hi';

import { AiOutlineHeart } from 'react-icons/ai';
import { TiUser } from 'react-icons/ti';

import { CgShoppingBag } from 'react-icons/cg'

import '../MainNav/MainNav.css';
import { useNavigate } from 'react-router-dom';

function Main() {

    const [show, setShow] = useState(false);
    const navToCart = useNavigate()
    return (

        <div className='main-nav d-flex align-items-center justify-content-between'>
            <div className='menu-button'>
                <Button variant="primary" onClick={() => setShow(true)}>
                    <HiMenu /> MENU
                </Button>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>


                        <div className="mb-2">
                            {['end'].map((direction) => (
                                <DropdownButton

                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={` Features `}
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            ))}
                            {['end'].map((direction) => (
                                <DropdownButton

                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={` CupCakes `}
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            ))}
                            {['end'].map((direction) => (
                                <DropdownButton

                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={`Cakes `}
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            ))}
                            {['end'].map((direction) => (
                                <DropdownButton

                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={` Birthday Cakes `}
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            ))}
                            {['end'].map((direction) => (
                                <DropdownButton

                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={`Pages `}
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            ))}
                            {['end'].map((direction) => (
                                <DropdownButton

                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={`Blog`}
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            ))}
                        </div>
                    </Modal.Body>
                </Modal>
            </div>



            <div className='logo-sec '>
                <input type="search" name="search" value="SEARCH" />
                <img src="../images/logo.png" alt="logo" />
                <div>
                    <AiOutlineHeart /> WISHLIST (0)
                </div>
            </div>


            <div className='cart-sec d-flex align-items-center justify-content-between'>
                <div className='account'>
                    <Dropdown>
                        <Dropdown.Toggle  id="dropdown-basic">
                        <TiUser /> MY ACCOUNT 
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">LOGIN</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">My Account</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
               
                <div className='cart'>
                    <button type="button" onClick={()=>navToCart('/cart')}><CgShoppingBag /> Your cart have {} items: {} </button>
                </div>

            </div>

        </div>

    );
}
export default Main