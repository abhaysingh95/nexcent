import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Client from './components/Client';
import Community from './components/Community';
import Unlock from './components/Unlock';
import Achievements from './components/Achievements';
import Calendar from './components/Calendar';
import Customer from './components/Customer';
import FooterOne from './components/FooterOne';
import Footer from './components/Footer';
import CommunityBase from './components/CommunityBase';


function App() {
  return (
    <div className="bg-[#F5F7FA] m-0 p-0 ">
      
        <Navbar />
        <Herosection />
        <Client />
        <Community />
        <Unlock />
        <Achievements />
        <Calendar />
        <Customer />
        <CommunityBase />
        <FooterOne />
        <Footer />

    </div>
    
  );
}

export default App;
