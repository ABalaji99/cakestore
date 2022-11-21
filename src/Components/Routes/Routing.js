import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home'
import Sale from '../Sale/Sale';

function Routing(cakes) {
  const cakes= cakewale ;
  return (
    <>
   <Routes>
    <Route path='/' element={<Home cakeItems={cakewale}/>}/>
    <Route path='/sale' element={<Sale/>}/>
   </Routes>
   </>
  )
}

export default Routing;