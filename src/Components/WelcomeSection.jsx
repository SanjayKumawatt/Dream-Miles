import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react'; // Icon ke लिए

import img from "../assets/hero/img2.jpg";

// डमी इमेज URL (Udaipur Lake Palace जैसा)
// इसे आप अपनी असली इमेज से बदल सकते हैं (e.g., import img from './assets/udaipur.png')
const UDAIPUR_IMAGE_URL = img;

const WelcomeSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* 1. Left Column (Image with Phone Box) */}
        <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl group">
          <img
            src={UDAIPUR_IMAGE_URL}
            alt="Welcome to Dream Miles Consultants" // Alt text updated
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Phone Number Box (Over Image) */}
          <div className="absolute bottom-6 left-6 bg-white p-5 rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              BOOK TOUR NOW
            </p>
            <a 
              href="tel:+919828577666" // Aap is number ko bhi badal sakte hain
              className="flex items-center mt-2 text-xl md:text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5 mr-3 text-blue-600" />
              booking@dream-miles.in 
                          </a>
          </div>
        </div>

        {/* 2. Right Column (Text Content & Button) */}
        <div className="flex flex-col justify-center">
          {/* === NAME UPDATED HERE === */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            Welcome To Dream Miles Consultants
          </h2>
          
          {/* === NAME UPDATED HERE === */}
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Dream Miles Consultants dedicated to creating personal travel experiences that go beyond the basic one day sightseeing tours. Each itinerary has a special focus and most of our local guides are employed with us.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            All of them are also college educated and experts in the field of focus or region. We believe visiting the Indian subcontinent is about more than just going on vacation – it's about having an unforgettable experience.
          </p>

          {/* Book Now Button */}
          <div className="flex">
            <Link
              to="/contact" // इसे आप /contact या /book-now पर भेज सकते हैं
              className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition-transform duration-300 transform hover:scale-105"
            >
              BOOK WITH US NOW
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;