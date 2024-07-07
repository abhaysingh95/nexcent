import React from 'react';

const Client = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#4D4D4D]">Our Clients</h2>
        {/* Paragraph */}
        <p className="mt-4 text-gray-600 text-lg">
          We have been working with some Fortune 500+ clients
        </p>
        {/* Logos */}
        <div className="mt-8 grid items-center grid-cols-4 sm:grid-cols-7 gap-10 m-6">
          <img src="./client/client1.png" alt="Client Logo 1" className="w-16 h-16 object-contain" />
          <img src="./client/client2.png" alt="Client Logo 2" className="w-16 h-16 object-contain" />
          <img src="./client/client3.png" alt="Client Logo 3" className="w-16 h-16 object-contain" />
          <img src="./client/client4.png" alt="Client Logo 4" className="w-16 h-16 object-contain" />
          <img src="./client/client5.png" alt="Client Logo 5" className="w-16 h-16 object-contain" />
          <img src="./client/client6.png" alt="Client Logo 6" className="w-16 h-16 object-contain" />
          <img src="./client/client7.png" alt="Client Logo 7" className="w-16 h-16 object-contain" />
        </div>
      </div>
    </section>
  );
}

export default Client;
