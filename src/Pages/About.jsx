import React from 'react';
import { NavLink } from 'react-router-dom';
import { Zap, DollarSign, Headset, CheckCircle } from 'lucide-react'; // Lucide Icons

import img1 from "../assets/hero/img1.webp";
import img2 from "../assets/ourtop/img8.png";
import img3 from "../assets/ourtop/img2.png";
import img4 from "../assets/ourtop/img9.png";
import img5 from "../assets/about/img1.jpg";
import img6 from "../assets/about/img2.jpg";

// --- UPDATED COMPANY DETAILS ---
const companyName = "DREAM MILES CONSULTANTS PRIVATE LIMITED";
const companyAddress = "Shop No. Fa - 152 Galaxy, Diamond Plaza, Greater, Gautam Buddha Nagar, Uttar Pradesh, India, 201318";
const companyActivity = "Travel agency activities";

// Why Choose Us features data
const features = [
  { icon: Zap, title: "ATTRACTIVE PACKAGES", description: "Regularly customized travel plans designed to excite locals." },
  { icon: DollarSign, title: "COST EFFICIENT SERVICES", description: "Provides highly efficient services at very competitive prices." },
  { icon: Headset, title: "Customer Service Guarantee", description: "Our outstanding customer service ensures prompt attention within 7 days to needs." },
  { icon: CheckCircle, title: "100% SATISFACTION", description: "Our company provides 100% customer satisfaction and trip priority." },
];

// Image data for the page
const images = {
  heroBg: img1, 
  leftStack1: img2,
  leftStack2: img3,
  leftStack3: img4,
  aboutImg1:img5,
  aboutImg2: img6,
};

const AboutPage = () => {
  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION (Header with Title) */}
      <div
        className="relative h-64 w-full overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${images.heroBg})`,
          backgroundPosition: "center", // 👈 image bottom part visible hoga
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-light tracking-wider drop-shadow-md">About</h1>
          <div className="flex space-x-2 text-sm mt-2">
            <NavLink to="/" className="hover:text-gray-200">Home</NavLink>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="relative grid grid-cols-1 lg:grid-cols-4 min-h-[1000px]">
        
        {/* LEFT SIDEBAR (Sticky - Blue Background) */}
        <div className="hidden lg:block lg:col-span-1 bg-blue-600 relative overflow-hidden">
          <div className="sticky top-0 p-12 space-y-8 h-screen flex flex-col justify-center">
              
              <div className="relative w-full  rounded-lg overflow-hidden shadow-xl">
                  <img src={images.leftStack1} alt="Taj Mahal" className="w-full h-full object-cover"/>
              </div>
              <div className="relative w-full rounded-lg overflow-hidden shadow-xl ">
                  <img src={images.leftStack2} alt="Qutub Minar" className="w-full h-full object-cover"/>
              </div>
              <div className="relative w-full  rounded-lg overflow-hidden shadow-xl ">
                  <img src={images.leftStack3} alt="Hawa Mahal" className="w-full h-full object-cover"/>
              </div>

          </div>
        </div>
        
        {/* RIGHT CONTENT (About Text & Why Choose) */}
        <div className="lg:col-span-3 py-16 px-4 sm:px-12">
            
          {/* --- SECTION 2.1: TOP ABOUT TEXT & IMAGE (Zig-Zag) --- */}
          <div className="max-w-4xl mx-auto mb-16">
              
              <p className="text-xl text-center text-gray-400 mb-2 font-serif">Learn about us</p>
              <h2 className="text-4xl font-bold text-center text-gray-700 mb-10">About Company</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  {/* Text Left */}
                  <div className="md:col-span-3 space-y-4 text-gray-600">
                      <p className="text-lg font-semibold text-gray-500 mb-4">
                          {companyName} is dedicated to creating personal travel experiences that go beyond the basic one day sightseeing tours.
                      </p>
                      <p className="text-sm font-medium text-gray-700 border-l-4 border-red-500 pl-3">
                          Registered Address: {companyAddress}
                          <br/>Activity: {companyActivity}
                      </p>
                      <p>
                          We are a reliable and certified Destination Tour Operator and Travel Agent in Jaipur. We are offering a wide range of custom tourism services. {companyName} is registered under the Ministry of Corporate Affairs, dedicated to fulfilling every client's travel dream within budget.
                      </p>
                      
                  </div>

                  {/* Image Right (Top) */}
                  <div className="md:col-span-2 relative">
                      <img src={images.aboutImg1} alt="About Image 1" className="w-full h-auto rounded-lg shadow-xl border-4 border-gray-200" />
                  </div>
              </div>

          </div>

          {/* --- SECTION 2.2: BOTTOM ABOUT TEXT & IMAGE (Zig-Zag) --- */}
          <div className="max-w-4xl mx-auto mb-20">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  
                  {/* Image Left (Bottom) */}
                  <div className="md:col-span-2 relative md:order-1">
                      <img src={images.aboutImg2} alt="About Image 2" className="w-full h-auto rounded-lg shadow-xl border-4 border-gray-200" />
                  </div>
                  
                  {/* Text Right */}
                  <div className="md:col-span-3 space-y-4 text-gray-600 md:order-2">
                      <p>
                          We offer a wide range of custom tourism services covering all aspects related to travel and tourism. This includes booking hotel rooms, local guides, transportation, tour packages, creating personalized travel sessions, and cab booking services. We take care to look into all the legalities, so our guests can enjoy their trip without any hassle.
                      </p>
                      <p className="border-l-4 border-blue-500 pl-4 py-2 italic text-gray-700">
                          Our professional and friendly staff provide proper support, always ready to help you plan your next great adventure. We believe travelling the Indian subcontinent is about having an unforgettable experience.
                      </p>
                  </div>

              </div>
          </div>

          {/* --- SECTION 3: WHY CHOOSE US --- */}
          <div className="max-w-5xl mx-auto mt-20 text-center">
              <h3 className="text-3xl font-bold text-gray-700 mb-12">
                  WHY CHOOSE JAIPUR SIGHTSEEING TRIP
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                      <div key={index} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                          <feature.icon className="w-8 h-8 text-blue-600 mb-3" />
                          <h4 className="text-sm font-bold text-gray-700 mb-2">{feature.title}</h4>
                          <p className="text-xs text-gray-500">{feature.description}</p>
                      </div>
                  ))}
              </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;
