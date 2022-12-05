import React from 'react';
import "./Slider.css"
import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../static/images/foto1.png'
import foto2 from "../static/images/foto2.png"
import foto3 from "../static/images/foto3.png"
import { Container } from '@mui/system';

function Slider() {
  return (
    <Container>

    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={foto1}
          alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={foto2}
          alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={foto3}
          alt="Third slide"
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
          </Container>
  );
}

export default Slider 