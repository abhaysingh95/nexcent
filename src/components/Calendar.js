import React from 'react';

const Calendar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-0 mb-20 bg-white p-4">
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img src="./calender.png" alt="Unlock" className="w-96 h-82 object-cover"/>
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-5xl text-[#4D4D4D] font-bold leading-tight mb-4">How to design your site footer like we did</h1>
        <p className="mt-8 text-[#717171] text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </p>
        <button className="bg-green-500 mt-8 text-white text-lg py-3 px-5 rounded hover:bg-green-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Calendar;
