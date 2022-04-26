import Carousel from "Components/Carousel3D";
import CarouselParallax from "Components/CarouselParallax";
import { Maindiv } from "./styles";

/** Home */
export default function Home() {
  /* var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

  return (
    <Maindiv>
      <CarouselParallax />
      {/* <Carousel items={items} active={0}/> */}
    </Maindiv>
  );
}
