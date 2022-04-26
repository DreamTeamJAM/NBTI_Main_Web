import React from "react";
import image1 from "assets/images/admins.jpg";
import image2 from "assets/images/barber.jpg";
import image3 from "assets/images/chef.jpg";
import image4 from "assets/images/mechanic.jpg";
import image5 from "assets/images/pharmacy.jpg";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper";

import "swiper/css/bundle";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

function Carousel() {
  return (
    <div className="container">
      <Swiper
        autoplay={{ delay: 2500 }}
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="carousel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="carousel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="carousel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="carousel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="carousel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="carousel-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
