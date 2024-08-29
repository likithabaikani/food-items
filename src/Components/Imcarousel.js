import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


export default function Imcarousel() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img style={{width:'100%', height:'350px'}}
            src={require("../assests/slideshow2.jpg")}

            class="img-fluid rounded-top"
            alt=""
        />
        
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%', height:'350px'}}
            src={require("../assests/slideshow1.jpg")}

            class="img-fluid rounded-top"
            alt=""
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%', height:'350px'}}
            src={require("../assests/slideshow2.jpg")}

            class="img-fluid rounded-top"
            alt=""
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    </div>
  )
}
