import React from "react";
import { CarouselComp } from "./Carousel";

import "./Home.css";
import { Container } from "react-bootstrap";
import CarouselCompLang from "./CarouselLang";

function Home(args) {
  const homeImageUrl = "https://imagedelivery.net/wnsKQets6eRCGizoqWHVjg/39f78907-4fc0-4aad-e4ec-5889b57b8d00/public";
  return (
    <>
      <div className="Title"><img src={homeImageUrl} width="130px" height="100%" alt="caja"/></div>
      <div> </div>
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
