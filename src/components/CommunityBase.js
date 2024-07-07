import React from 'react';

const CommunityBase = () => {
  return (
    <div className="bg-gray-100 mb-20">
      <div className="container mx-auto px-4 py-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#4D4D4D] text-center mb-6">Caring is the new marketing</h1>

        {/* Paragraph */}
        <p className="text-center text-[#717171] mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
        adipiscing elit. Sed do <br/> eiusmod tempor incididunt ut labore et dolore magna
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua.</p>

        {/* Images Row */}
        <div className="  mt-1 grid grid-cols-1 sm:grid-cols-3 gap-24 ">
          {/* Image 1 */}
          <div className="relative text-center">
            <img src="./commBase1.jpeg" alt="Image 1" className="w-96 shadow-md rounded-md h-auto mb-4"/>
            <div className="absolute  left-14 right-0 top-40 rounded-md shadow-md bg-[#F5F7FA] p-5 z-28  w-64 " style={{ minWidth: "16rem" }}>
              <p className="text-lg mb-2">Creating Streamlined Safeguarding Processes with OneRen</p>
              <div className="flex items-center justify-center">
              <a href="#" className="text-green-500 flex items-center">
                Read More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
                </svg>
              </a>
              </div>
              
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative">
            <img src="./commBase2.jpeg" alt="Image 2" className="w-96 shadow-md h-auto rounded-md mb-4"/>
            <div className="absolute  left-14 right-0 top-40 rounded-md shadow-md bg-[#F5F7FA] p-5 z-28  w-64" style={{ minWidth: "16rem" }}>
              <p className="text-lg text-center mb-2">Creating Streamlined Safeguarding Processes with OneRen</p>
              <div className='flex items-center justify-center'>
              <a href="#" className="text-green-500 flex items-center">
                Read More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
                </svg>
              </a>
              </div>
              
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative">
            <img src="./commBase3.jpeg" alt="Image 3" className="w-96 shadow-md h-auto rounded-md mb-4"/>
            <div className="absolute  left-14 right-0 top-40 rounded-md bg-[#F5F7FA] shadow-md p-5 z-28  w-64" style={{ minWidth: "16rem" }}>
              <p className="text-lg text-center mb-2">Creating Streamlined Safeguarding Processes with OneRen</p>
              <div className='flex items-center justify-center'>
              <a href="#" className="text-green-500 flex items-center">
                Read More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
                </svg>
              </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityBase;
