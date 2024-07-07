import React, { useState } from 'react';
import CountUp from 'react-countup';

const Achievement = () => {
  const [startCount, setStartCount] = useState(false);

  const handleMouseEnter = () => {
    setStartCount(true);
  };

  const stats = [
    { imgSrc: './achievement/member.png', number: 2245341, label: 'Members' },
    { imgSrc: './achievement/club.png', number: 46328, label: 'Clubs' },
    { imgSrc: './achievement/events.png', number: 828867, label: 'Event Bookings' },
    { imgSrc: './achievement/payment.png', number: 1926436, label: 'Payments' },
  ];

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center m-12.5 mt-2 p-4"
      onMouseEnter={handleMouseEnter}
    >
      <div className="md:w-1/2 p-4 flex flex-col justify-center">
        <h1 className="text-5xl leading-tight font-bold text-[#4D4D4D]">Helping a local</h1>
        <h2 className="text-5xl leading-tight font-bold text-green-500">business reinvent itself</h2>
        <p className="mt-4 text-lg text-[#4D4D4D]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
      </div>
      <div className="md:w-1/2 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center p-4">
            <div className="w-12 h-10 mr-4">
              <img src={stat.imgSrc} alt={stat.label} className="object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                <CountUp start={startCount ? 0 : null} end={stat.number} duration={2} separator="," />
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
