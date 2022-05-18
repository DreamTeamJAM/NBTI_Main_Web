import ImageSlider from "Components/CarsouselSimple";
import image1 from "../../assets/images/w1.png";
import image2 from "../../assets/images/chefs-wallpaper.jpg";
import image3 from "../../assets/images/ewee-wallpaper.jpg";
import image4 from "../../assets/images/it-wallpaper.jpg";
import image5 from "../../assets/images/ewee-wallpaper.jpg";
import image6 from "../../assets/images/chefs-wallpaper.jpg";

export default function Home() {
  /* var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

  return (
    <div>
      <ImageSlider images={[image1, image2, image3, image4, image5, image6]}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: '#000'
          }}
        >
          <h1>React.js Image Slider</h1>
          <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </ImageSlider>
      {/* <Carousel items={items} active={0}/> */}
    </div>
  );
}
