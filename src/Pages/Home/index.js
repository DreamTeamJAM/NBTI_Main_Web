import ImageSlider from "Components/CarsouselSimple";
import image1 from "../../assets/images/w1.png";
import image2 from "../../assets/images/chefs-wallpaper.jpg";
import image3 from "../../assets/images/ewee-wallpaper.jpg";
import image4 from "../../assets/images/it-wallpaper.jpg";
import image5 from "../../assets/images/ewee-wallpaper.jpg";
import image6 from "../../assets/images/chefs-wallpaper.jpg";
import LearnMoreButton from "./../../Components/LearnMoreButton/index";

export default function Home() {
  /* var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

  return (
    <div>
      <ImageSlider images={[image1, image2, image3, image4, image5, image6]}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            color: "#000",

          }}
        >
          <h1>
            <span>National Business Training Institute</span>
          </h1>
          <p>
            We specialise in assisting students form around the EU in finding
            work placements in Ireland, and we love what we do! <br /> All the
            small details are taken care of by us so you just need to enjoy and
            learn. <br />
            Lives can be changed and great talent developed and we want you to
            be part of it!
            <br /> So please, take a look around our website and don't be shy -
            if you need more info, please let us know!
          </p>
        <div>
          <LearnMoreButton />
        </div>
        </div>
      </ImageSlider>
      {/* <Carousel items={items} active={0}/> */}
    </div>
  );
}
