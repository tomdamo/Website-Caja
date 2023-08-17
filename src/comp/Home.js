import React from "react";
import { CarouselComp } from "./Carousel";

import "./Home.css";
import { Container } from "react-bootstrap";
import { About } from "./About";
import CarouselCompLang from "./CarouselLang";

function Home(args) {
  return (
    <>
      <h1 className="Title">Caja Boogers</h1>
      <div className="grid-container">
        <div className="carousel">
          <CarouselCompLang />
        </div>
        <div className="hero">
          <div className="hero-content">
            <Container>
              <About />
            </Container>
            <Container>
              <CarouselComp />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
