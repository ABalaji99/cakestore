import React from 'react';
import './App.css';
import Header from './components/front/Header.js';

import data from './components/back/Data/Data.js';
import RoutesFi from './components/front/RoutesFo/RoutesFi';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';


import Sliders from './components/front/Carousel/Sliders';
import Categories from './components/front/Catergories/Categories';
import CupCakes from './components/front/CupCakes/CupCakes';
import Featured from './components/front/Featured/Featured';

import Foot from './components/front/Footer/Foot';
import Benefits from './components/front/Benifits/Benefits';



const App = () =>{
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) =>{
    // find-product is already in cart items
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist,quntity: ProductExist.quntity+1}:item)
      );
    }
    else{
      setCartItems([...cartItems, {...product, quntity: 1}])
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
        cartItems.map((item) => item.id === product.id ? {...ProductExist, quntity: ProductExist.quntity - 1}:item)
      )
    }
  }

  // clear cart function 
  const handleCartClearance = () =>{
    setCartItems([]);
  }

  return(
    <div className="App">
      
      
          <Router>
             
            <Route>
             
              <Header cartItems={cartItems}/>
            </Route>
            <Route path="/" exact>
              <Sliders/>
            </Route>
            <Route path="/" exact>
            <Benefits/>
           </Route>
            <Route path="/" exact>
              <Categories/>
            </Route>
            <Route>
              <RoutesFi productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} 
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance} />
            </Route>
         

            <Route path="/" exact>
              <CupCakes productItems={productItems}/>
            </Route>

            <Route path="/" exact>
              <Featured  productItems={productItems}/>
            </Route>
           

           <Route path="/" exact>
           <Foot/>
           </Route>
         


           





          </Router>
       
    </div>
  );
 } 


export default App;
