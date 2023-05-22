import React from 'react';
import {CarouselComp} from './Carousel'

import './Home.css'
import { Container } from 'react-bootstrap'
import { About } from './About';

function Home(args) {
  
  return (
    <>
    <h1 className="Title">Caja Boogers</h1>
    <div className="grid-container">
        <div className="carousel">
          <CarouselComp />
        </div>
        <div className="hero">
          <Container>
            <About/>
          </Container>
      </div>
      </div>
    </>
  );
}

export default Home;