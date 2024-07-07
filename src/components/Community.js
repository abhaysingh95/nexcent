import React from 'react';
import { FaUsers, FaBuilding, FaTasks } from 'react-icons/fa';

const Community = () => {
  return (
    <div className=" bg-white flex flex-col items-center justify-center p-0">
      <h1 className="text-4xl font-bold text-[#4D4D4D] text-center mb-2 leading-tight">
        Manage your entire community <br/>in a single system
      </h1>
      {/* <h2 className="text-2xl text-center mb-4">in a single system</h2> */}
      <p className="text-center mt-3 mb-8 max-w-md text-[#717171] text-lg">
        Who is Nextent suitable for?
      </p>
      <div className="mt-1 grid grid-cols-1 sm:grid-cols-3 gap-28 m-16">
        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
          <img src="./community/community1.png" alt="Client Logo 1" className="w-32 h-24 object-contain" />
          <h1 className="text-3xl text-[#4D4D4D] font-bold text-center mb-2">Membership <br/>Organisation</h1>
          <p className="text-[#717171] text-lg">
            Our Membership management software provides full automation of Membership renewals and payments
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
          <img src="./community/community2.png" alt="Client Logo 1" className="w-32 h-24 object-contain" />
          <h1 className="text-3xl text-[#4D4D4D] font-bold text-center mb-2">National <br/> Association</h1>
          <p className="text-[#717171] text-lg">
          Our Membership management software provides full automation of Membership renewals and payments
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
          <img src="./community/community3.png" alt="Client Logo 1" className="w-32 h-24 object-contain" />
          <h1 className="text-3xl text-[#4D4D4D] font-bold text-center mb-2">Clubs And <br/> Groups</h1>
          <p className="text-[#717171] text-lg">
          Our Membership management software provides full automation of Membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
