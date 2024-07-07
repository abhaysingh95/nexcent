import React from 'react';

const Customer = () => {
  const loremIpsum = `Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
  ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
  Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
  Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. 
  Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
  Nam nec ante.`;

  return (
    <div className="bg-[#F5F7FA] flex flex-col mb-0 items-center justify-center p-0">
      <div className="flex flex-col md:flex-row space-x-8 mb-16 ">
        {/* Left Frame */}
        <div className="md:w-1/4 flex items-center justify-center p-4">
          <img src="./customer/customer.png" alt="Customer" className="w-18 h-18 rounded shadow-2xl" />
        </div>
        
        {/* Right Frame */}
        <div className="md:w-3/4 p-4">
          <div className="space-y-4">
            {/* First Div */}
            <div>
              <p>{loremIpsum}</p>
            </div>

            {/* Second Div */}
            <div>
              <h1 className="text-xl font-bold text-green-500">Tim Smith</h1>
            </div>

            {/* Third Div */}
            <div>
              <p>British Dragon Boat Racing Association</p>
            </div>

            {/* Fourth Div */}
            <div className="mt-8 grid items-center grid-cols-3 sm:grid-cols-7 ">
              {/* Small Images */}
              <img src="./customer/customer1.png" alt="Logo1" className="w-14 h-14 " />
              <img src="./customer/customers2.png" alt="Logo2" className="w-14 h-14 " />
              <img src="./customer/customer3.png" alt="Logo3" className="w-14 h-14 " />
              <img src="./customer/customer4.png" alt="Logo4" className="w-14 h-14  " />
              <img src="./customer/customer5.png" alt="Logo5" className="w-14 h-14 " />
              <img src="./customer/customer6.png" alt="Logo6" className="w-14 h-14 " />

              {/* Text with Arrow */}
              <div className="flex items-center space-x-2">
                <span className="text-green-500 hover:text-green-600 font-bold text-xl cursor-pointer">Meet all Customers</span>
                
                <svg className="w-20 h-20 text-green-500 hover:text-green-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
