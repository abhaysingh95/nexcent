// import React from 'react';
// import { Menu } from '@headlessui/react';
// import { HomeIcon, InformationCircleIcon, BriefcaseIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-lg font-bold">
//           MyWebsite
//         </div>
//         <div className="flex space-x-4">
//           <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//             <HomeIcon className="h-5 w-5 inline-block mr-1" /> Home
//           </a>
//           <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//             <InformationCircleIcon className="h-5 w-5 inline-block mr-1" /> About
//           </a>
//           <a href="#services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//             <BriefcaseIcon className="h-5 w-5 inline-block mr-1" /> Services
//           </a>
//           <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//             <PhoneIcon className="h-5 w-5 inline-block mr-1" /> Contact
//           </a>
//           <a href="#profile" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//             <UserIcon className="h-5 w-5 inline-block mr-1" /> Profile
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#F5F7FA]  mt-0 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and Website Name */}
        <div className="flex items-center">
          <img src="./logo-png.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-3xl font-bold text-gray-800">Nexcent</span>
        </div>

        {/* Middle: Navigation Elements */}
        <div className="hidden md:flex space-x-16">
          <a href="#home" className="text-gray-800 text-lg hover:text-gray-600 font-bold">Home</a>
          <a href="#service" className="text-gray-800 text-lg hover:text-gray-600">Service</a>
          <a href="#feature" className="text-gray-800 text-lg hover:text-gray-600">Feature</a>
          <a href="#product" className="text-gray-800 text-lg hover:text-gray-600">Product</a>
          <a href="#testimonial" className="text-gray-800text-lg  hover:text-gray-600">Testimonial</a>
          <a href="#faq" className="text-gray-800 text-lg hover:text-gray-600">FAQ</a>
        </div>

        {/* Right side: Login and Signup Buttons */}
        <div className="flex items-center space-x-5">
          <button className="text-green-500 text-lg hover:text-green-700">Login</button>
          <button className="bg-green-500 text-lg  text-white px-4 py-2 rounded-md hover:bg-green-600">Sign up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
