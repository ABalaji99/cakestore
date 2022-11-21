import React from 'react'
import Sliders from '../Carousel/Sliders'
import { Container } from 'react-bootstrap';
import Main from '../MainNav/Main'
import TopNav from '../TopNav/TopNav'

function Home() {
  return (
   <div className='home'>
    <Container fluid>
    <TopNav />
    <Main/>
    <Sliders/>
    </Container>
   </div>
  )
}

export default Home