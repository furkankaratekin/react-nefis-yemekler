import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";

const Slider = () => {
  return (
    <div className="p-4">
      <Carousel
        showThumbs={false}
        className="rounded-2xl overflow-hidden m-5"
        autoPlay
        interval={3000}
        infiniteLoop
        axis="horizontal"
      >
        <div className="h-48 sm:h-64 md:h-80 lg:h-96">
          <img
            src={slider1}
            alt="Slider Image 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="h-48 sm:h-64 md:h-80 lg:h-96">
          <img
            src={slider2}
            alt="Slider Image 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="h-48 sm:h-64 md:h-80 lg:h-96">
          <img
            src={slider3}
            alt="Slider Image 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
