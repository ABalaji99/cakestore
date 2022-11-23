import React from 'react';
import Table from 'react-bootstrap/Table';  
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


const Cart = ({cartItems, handleAddProduct,handleRemoveProduct,handleCartClearance}) => {
    const totalPrice = cartItems.reduce((price,item) => price + item.quantity * item.price,0);

    const navtoCheckout = useNavigate()
    const navToShop = useNavigate()


    const removePro=()=>{
          document.getElementsByTagName('td').style.display ='none'
    }

  return (
    <Container >
        <div className='clear-cart-txt'>
            {cartItems.length >=1 && (
                <button className='clear-cart-btn' onClick={handleCartClearance}>Clear Cart Item</button>
            )}
        </div>
        {cartItems.length === 0 && (<div className='card-item-empty'>Your Shopping bag is empty!!!!<img src = "../images/b-1.jpg" width={'40px'} alt=''/></div>)}
        <div className='cart-item'>

                    
                            <div>
                                <div className='cart-table'>
                                    <Table >
                                        
                                        <tbody>
                                        <tr>
                                                {cartItems.slice(0,2).map((item) => (
                                                    <div key={item.id} className="card-item-list">
                                               
                                                <td><img className='cart-item-img' src = {item.img} alt={item.title}/></td>
                                                <td><div className='cart-item-name'>{item.title}</div></td>
                                                <td>
                                                    <div className='cart-item-function'>
                                                        <button className='cart-item-add' onClick={() => handleAddProduct(item)}>+</button> <span>{item.quntity}</span>
                                                        <button className='cart-remove-add' onClick={() => handleRemoveProduct(item)}>-</button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='cart-items-price'>
                                                        {item.quntity} * {item.price}
                                                    </div>
                                                </td>
                                                <td><button type="button" onClick={removePro}>cancel</button></td>
                                                </div>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        
                            <div className='cart-item-total-price-name'>
                                <div className='cart-total-txt'>
                                    <p> Total Price : </p>
                                    <div className='cart-item-total-price'>${totalPrice}</div>
                                </div>
                            </div>
                            <div className='check-out-btn'>
                                <button className='check-btn' onClick={()=>navToShop(-1)}>Continue Shopping</button>
                                <button className='check-btn' onClick={()=>navtoCheckout('/checkout')}>Checkout</button>
                            </div>
        </div>
    </Container>
    
  )
}

export default Cart