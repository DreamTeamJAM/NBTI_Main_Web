import ImageSlider from "Components/CarsouselSimple";
import image1 from "../../assets/images/admin-wallpaper.png";
import image2 from "../../assets/images/it2-wallpaper.png";
import image3 from "../../assets/images/ewee-wallpaper.png";
import image4 from "../../assets/images/it-wallpaper.png";
import image5 from "../../assets/images/ewee-wallpaper.png";
import image6 from "../../assets/images/chefs-wallpaper.png";
import LearnMoreButton from "./../../Components/LearnMoreButton/index";
import { HomeContainer, ButtonDiv } from "./styles";
import Brochure from "./../../Components/Brochure/index";

export default function Home() {
  return (
    <HomeContainer>
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
          <ButtonDiv style={{background: 'none'}}>
            <LearnMoreButton />
          </ButtonDiv>
        </div>
      </ImageSlider>
      <Brochure />
    </HomeContainer>
  );
}
