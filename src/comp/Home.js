import React from "react";
import { CarouselComp } from "./Carousel";

import "./Home.css";
import { Container } from "react-bootstrap";
import { About } from "./About";
import CarouselCompLang from "./CarouselLang";

function Home(args) {
  return (
    <>
      <div className="Title"><img src="cajaCAJA2.jpeg" width="130px" height="100%"/></div>
      <div className="grid-container">
        <div className="carousel">
          <CarouselCompLang />
        </div>
        <div className="hero">
          <div className="hero-content">
            <Container>
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
