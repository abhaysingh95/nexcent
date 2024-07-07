

// import React from 'react';

// const FooterOne = () => {
  

//   return (
//     <div className="flex flex-col md:flex-row text-center items-center justify-center m-12.5 mt-2 p-4">
//       <div className="md:w-1/2 p-4 flex flex-col justify-center ">
//         <h1 className="text-5xl leading-tight font-bold text-[#4D4D4D]">Pellentesque suscipit</h1>
//         <h2 className="text-5xl leading-tight font-bold text-[#4D4D4D]">fringilla libero eu</h2>
//         <p className="mt-4 text-lg text-[#4D4D4D]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing
//         </p>
//         <button className="mt-8 bg-green-500 text-white px-6 w-44 py-3 justify-center text-lg rounded-md hover:bg-green-600">
//             Get a demo
//         </button>
//       </div>
        

      
//     </div>
//   );
// };

// export default FooterOne;

import React from 'react';

const FooterOne = () => {
  return (
    <footer className=" py-2 m-2 mb-16">
      <div className="container mx-auto leading-tight text-center">
        <h2 className="text-5xl text-[#4D4D4D] font-bold leading-tight mb-4">
          Pellentesque suscipit <br />fringilla libero eu
        </h2>
        <button className="bg-green-500 mt-5 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-md inline-flex items-center">
          Get a demo
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default FooterOne;

