import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import m8 from './image/m8.jpeg';
import m9 from './image/m9.jpg';
import m10 from './image/m10.jpeg';
import m1 from './image/m1.png';
import m12 from './image/m12.jpg'
import m13 from './image/m13.jpg'
import m14 from './image/m14.jpg'

function Slider() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={m8}
            alt="First slide"
            style={{ height: '300px', objectFit: 'cover' }} 
          />
          <Carousel.Caption>
            <h5 style={{color:'white',fontSize:'30px',fontWeight:'bolder'}}>Popular Princess</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={m12}
            alt="First slide"
            style={{ height: '300px', objectFit: 'cover' }} 
          />
          <Carousel.Caption>
            <h5  style={{color:'white',fontSize:'30px',fontWeight:'bolder'}}>The Underdog Strikes Back</h5>
            <p>The young master of H's most influential family and the world's foremost inheritor of the mystical arts</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={m9}
            alt="First slide"
            style={{ height: '300px', objectFit: 'cover' }} 
          />
          <Carousel.Caption>
          <h5 style={{color:'white',fontSize:'30px',fontWeight:'bolder'}}>Popular Princess</h5>
            <p>The young, handsome general and the dark-hearted emperor</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={m13}
            alt="First slide"
            style={{ height: '300px', objectFit: 'cover' }} 
          />
          <Carousel.Caption>
            <h5 style={{color:'white',fontSize:'30px',fontWeight:'bolder'}}>King of Martial Arts</h5>
            <p>Being kicked out by the sect? Being humiliated by fellows</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={m10}
            alt="First slide"
            style={{ height: '300px', objectFit: 'cover' }} 
          />
          <Carousel.Caption>
            <h5  style={{color:'white',fontSize:'30px',fontWeight:'bolder'}}>Vengeance Of The Omnipotent AI</h5>
            <p>Gu Ann, an artificial intelligence robot </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={m14}
            alt="First slide"
            style={{ height: '300px', objectFit: 'cover' }} 
          />
          <Carousel.Caption>
            <h5  style={{color:'white',fontSize:'30px',fontWeight:'bolder'}}>God of Martial Arts</h5>
            <p>In this world, respect is earned with martial arts</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={m1}
            alt="Second slide"
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5  style={{color:'white',fontSize:'30px',fontWeight:'bolder'}}>Against the Gods</h5>
            <p>Adapted from the best-selling novel of the same name.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;

