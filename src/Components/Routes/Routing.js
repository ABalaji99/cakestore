import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home'
import Sale from '../Sale/Sale';

function Routing() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>

    <Route path='/sale' element={<Sale/>}/>
   </Routes>
   </>
  )
}

export default Routing;