import React from "react";
import {
  Wrapper,
  Slide,
  ChildrenWrapper,
  Gradient,
  IndicatorWrapper,
  Dot,
} from "./styles.js";
import { useState, useEffect } from "react";

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};

function ImageSlider({
  images = [],
  autoPlay = true,
  autoPlayTime = 6000,
  children,
  ...props
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <Wrapper {...props}>
      {images.map((image, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        ></Slide>
      ))}
      <Gradient />
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
      <ChildrenWrapper>
        <div>{children}</div>
      </ChildrenWrapper>
    </Wrapper>
  );
}

export default ImageSlider;
