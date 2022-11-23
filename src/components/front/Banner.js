
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';


export default function banner() {
  return (
    <>  
 
    <div className='banner-slide'>
    <Container>
      <div className='banner-header'>
      <h2>WP-Shopkeeper - Premium Responsive WordPress Theme</h2>
        <p>Incredibly Versatile and Loaded with Options, Including WooCommerce Integration</p>
      </div>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/workin2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>This is a Featured Post</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className='slide-btn'>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/spring2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>This is a Featured Post</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='slide-btn'>Shop Now</button>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/slide3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>This is a Featured Post</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button className='slide-btn'>Shop Now</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/mistymorning.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>This is a Featured Postl</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button className='slide-btn'>Shop Now</button>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>   
    </div>
        
       
 
    </>
    
  )
}

