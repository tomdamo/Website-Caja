import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

import { homeImages2 } from "./images";
import "./Carousel.css";

const items = homeImages2.map((image, index) => ({
  src: image.src,
  altText: image.alt,
  caption: `Slide ${index + 1}`,
  key: index,
}));

export function CarouselCompLang(args) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem key={item.src}>
      <img src={item.src} alt={item.altText} className="carousel-image" />
    </CarouselItem>
  ));

  useEffect(() => {
    const interval = setInterval(next, 4000); // 6000ms = 6 seconds

    return () => {
      clearInterval(interval);
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div className="carousel-container">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default CarouselCompLang;
