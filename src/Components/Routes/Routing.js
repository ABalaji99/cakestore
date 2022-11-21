import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home'

function Routing() {
  return (
    <>
   <Home />
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </>
  )
}

export default Routing;