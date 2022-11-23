import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import Error from '../Error';
import Home from '../Home/Home'
import Sale from '../Sale/Sale';

function Routing({constantItems}) {

  const [cartItems, setCartItems] = useState([]);


 

  const handleAddProduct = (product) =>{
    // find-product is already in cart items
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist,quantity: ProductExist.quantity+1}:item)
      );
    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  };


    // handle-product function.

    const handleRemoveProduct = (product) =>{
      const ProductExist = cartItems.find((item) => item.id === product.id);
        if(ProductExist.quntity === 1){
          setCartItems(cartItems.filter((item) => item.id !== product.id ));
        }
        else{
          setCartItems(
            cartItems.map((item) => item.id === product.id ? {...ProductExist,quantity: ProductExist.quantity - 1}:item)
          )
        }
      }


        // clear cart function 
  const handleCartClearance = () =>{
    setCartItems([0]);
  }




  return (
    <>
   <Routes>
    <Route path='/' element={<Home cakeItems={constantItems} handleAddProduct={handleAddProduct}/>}/>
    
    <Route path='/sale' element={<Sale/>}/>

    <Route path='/cart' element={<Cart cartItems={constantItems}  handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance = {handleCartClearance}/>}/>

    <Route path='*' element ={<Error/>}/>

    <Route path='/checkout' element={<Checkout/>}/>
   </Routes>
   </>
  )
}

export default Routing;