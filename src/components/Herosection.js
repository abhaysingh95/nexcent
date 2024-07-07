import React, { useState } from 'react';

const Herosection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? pages.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === pages.length - 1 ? 0 : prevIndex + 1));
  };

  const pages = [
    {
      heading: "Lesson and Insights",
      subHeading: "from 8 years",
      paragraph: "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      imageUrl: "./Hero-image.png"
    },
    {
      heading: "Transform Business",
      subHeading: "Solutions",
      paragraph: "Discover how our cutting-edge technologies can help you stay ahead in the market.",
      buttonText: "Learn More",
      imageUrl: "./Hero-image.png"
    },
    {
      heading: "Connect and Grow",
      subHeading: "community",
      paragraph: "Become a part of a vibrant community and expand your network like never before.",
      buttonText: "Join Now",
      imageUrl: "./Hero-image.png"
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-20 p-4 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Frame */}
        <div className="md:w-1/2 flex flex-col items-start text-left p-4">
          <h1 className="text-6xl font-bold text-gray-600 leading-tight">
            {pages[activeIndex].heading} <p className='text-green-500'>{pages[activeIndex].subHeading}</p>
          </h1>
          <p className="mt-7 text-gray-500 text-lg">
            {pages[activeIndex].paragraph}
          </p>
          <button className="mt-8 bg-green-500 text-white px-6 py-3 text-lg rounded-md hover:bg-green-600">
            {pages[activeIndex].buttonText}
          </button>
        </div>
        {/* Right Frame */}
        <div className="md:w-1/2 p-4 flex justify-center">
          <img src={pages[activeIndex].imageUrl} alt="Hero Image" className="w-[391px] h-[407px] object-cover" />
        </div>
      </div>
      {/* Page Sliding Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {pages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
      {/* Carousel Arrows */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={handlePrevClick}
          className="text-green-500 bg-transparent p-2 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          className="text-green-500 bg-transparent p-2 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Herosection;
