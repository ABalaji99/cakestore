import React from 'react'
import Sliders from '../Carousel/Sliders'
import { Container } from 'react-bootstrap';
import Main from '../MainNav/Main'
import TopNav from '../TopNav/TopNav'
import '../Home/Home.css'
import {SiBigcartel} from 'react-icons/si'
import Benefits from '../Benifits/Benefits';
import Categories from '../Catergories/Categories';


import TrendingCakes from '../TrendingCakes/TrendingCakes';

function Home(cakewale) {
  const cakewale =cakesz
  return (
   <div className='home'>
    <Container fluid>
    <TopNav />
    <Main/>
    <Sliders/>
    <Benefits/>
    <Categories/>
    <TrendingCakes trendCakes={cakesz}/>

    <button type="button" className='buynow-sticky'>
   <SiBigcartel/> Buy Now
    </button>
    </Container>





  
   </div>
  )
}

export default Home