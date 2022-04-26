import React from "react";
import ReactDOM from "react-dom";
import "./css/base.css";
import "./css/reset.css";
import EmblaCarousel from "./js/EmblaCarousel";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function CarouselParallax() {
  return (
    <EmblaCarousel slides={slides} />
  )
}

export default CarouselParallax