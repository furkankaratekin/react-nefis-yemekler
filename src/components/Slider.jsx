import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div>
      <Carousel showThumbs={false}>
        <div className="h-48 sm:h-64 md:h-80 lg:h-96">
          <img
            src="assets/2.jpeg"
            alt="Slider Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-48 sm:h-64 md:h-80 lg:h-96">
          <img
            src="assets/2.jpeg"
            alt="Slider Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-48 sm:h-64 md:h-80 lg:h-96">
          <img
            src="assets/2.jpeg"
            alt="Slider Image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
