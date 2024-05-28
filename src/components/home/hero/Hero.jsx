import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./hero.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    // Typing speed adjustment
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      title: "Search Your Next Home",
      description:
        "Find new & featured properties located in your local city. Find new & featured properties located in your local city. ",
      buttonText: "Search Now",
      bgImage:
        "https://main.wpresidence.net/wp-content/uploads/2024/01/wpresidece-header.webp",
    },
    {
      id: 2,
      title: "Discover Your Dream Property",
      description:
        "Explore thousands of properties in your area. Whether you're looking to buy or rent, find your perfect property here.",
      buttonText: "View Properties",
      bgImage:
        "https://main.wpresidence.net/wp-content/uploads/2024/01/wpresidece-header.webp",
    },
    // Add more slides as needed
  ];

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className="absolute inset-y-1/2 left-4 z-50 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full shadow-lg focus:outline-none"
      >
        <FaChevronLeft className="h-6 w-6" />
      </button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className="absolute inset-y-1/2 right-4 z-50 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full shadow-lg focus:outline-none"
      >
        <FaChevronRight className="h-6 w-6" />
      </button>
    );
  }

  // Typewriter effect hook
  const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      let charIndex = 0;
      const interval = setInterval(() => {
        if (charIndex <= text.length) {
          setDisplayText(text.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(interval);
        }
      }, settings.speed);

      return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <div
            className="hero bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container relative z-10 h-full flex flex-col justify-center">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl lg:text-9xl font-bold  mb-4">
                  <Typewriter text={slide.title} className="text-9xl" />
                </h1>
                <p className="text-lg md:text-xl lg:text-sm text-white mb-6 text-center">
                  {slide.description}
                </p>
                <div>
                  <button className="bg-[#27ae60] text-white p-4 rounded-md w-52 mr-10">
                    {slide.buttonText}
                  </button>
                  <button className="bg-gray-500 text-white p-4 rounded-md w-52">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
