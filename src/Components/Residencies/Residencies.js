import React from "react";
import "./Residencies.css";
import data from "../../Utils/Slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="r-container paddings innerWidth">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SliderButtons />
          {data.map((curElem, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={curElem.image} alt="image1" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{curElem.price}</span>
                  </span>
                  <span className="primaryText">{curElem.name}</span>
                  <span className="secondaryText">{curElem.detail}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
