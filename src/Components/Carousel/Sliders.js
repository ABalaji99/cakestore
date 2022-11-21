import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Sliders() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/slide1.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/slide2.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Sliders;