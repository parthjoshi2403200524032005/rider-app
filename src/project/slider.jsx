import React, { useState } from "react";
import one from "../images/four.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/one.jpg";
import five from "../images/five.jpg";
import six from "../images/six.jpg";

const Slider = () => {
  const images = [one, two, three, four, five, six];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mx-auto max-w-8xl h-[750px] mt-[105px] overflow-hidden">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 text-3xl text-white hover:text-gray-300 focus:outline-none"
      >
        &lt;
      </button>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-[100%] h-[700px] rounded-b-[50px] transition-opacity duration-500 ease-in-out"
      />

      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 text-3xl text-white hover:text-gray-300 focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;