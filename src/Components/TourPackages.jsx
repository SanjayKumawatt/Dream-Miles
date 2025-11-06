import React from 'react';
import { Link } from 'react-router-dom';


import img1 from "../assets/packages/img1.png";
import img2 from "../assets/packages/img2.png";
import img3 from "../assets/packages/img3.png";
import img4 from "../assets/packages/img4.png";
import img5 from "../assets/packages/img5.png";
import img6 from "../assets/ourtop/img10.png";

// 1. टूर पैकेजेज के डेटा में 'duration' जोड़ा गया है
const tourPackages = [
  {
    name: '02 Days Golden Triangle Tour',
    slug: '2-days-golden-triangle',
    duration: '02 Days / 01 Night',
    // (Image: Jaipur City Palace)
    url: img1
  },
  {
    name: '03 Days Golden Triangle Tour',
    slug: '3-days-golden-triangle',
    duration: '03 Days / 02 Nights',
    // (Image: Hawa Mahal)
    url: img2
  },
  {
    name: '04 Days Golden Triangle Tour',
    slug: '4-days-golden-triangle',
    duration: '04 Days / 03 Nights',
    // (Image: Taj Mahal)
    url: img3
  },
  {
    name: 'Golden Triangle Tour With Mathura Vrindavan',
    slug: 'golden-triangle-mathura-vrindavan',
    duration: '03 Days / 02 Nights', // Example
    // (Image: Mathura/Vrindavan)
    url: img4
  },
  {
    name: 'Golden Triangle Tour With Ajmer And Pushkar',
    slug: 'golden-triangle-ajmer-pushkar',
    duration: '04 Days / 03 Nights', // Example
    // (Image: Pushkar)
    url: img5
  },
  {
    name: 'Golden Triangle Tour With Bharatpur And Ranthambore',
    slug: 'golden-triangle-ranthambore',
    duration: '05 Days / 04 Nights', // Example
    // (Image: Tiger)
    url: img6
  },
];

// 2. पैकेज कार्ड के लिए सब-कॉम्पोनेंट (Updated)
const PackageCard = ({ name, url, slug, duration }) => {
  return (
    <Link 
      to={`/tour/${slug}`} // यह /tour/ (या /package/) URL पर जाएगा
      className="relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer group transition-transform duration-300 hover:scale-[1.03]"
    >
      {/* Background Image */}
      <img
        src={url}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Dark Overlay (Hover par gehra) */}
      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/60"></div>
      
      {/* Gradient (Bottom se) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      {/* Text Content (Center mein) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
        <h3 className="text-lg font-semibold drop-shadow-md">
          {name}
        </h3>
        {/* Duration text (Hover par dikhega) */}
        <p className="text-sm text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Duration: {duration}
        </p>
      </div>
      
      {/* White Inner Border (Hover par dikhega) */}
      <div className="absolute inset-0 m-3 border-2 border-white opacity-0 group-hover:opacity-100 rounded-md transition-all duration-300 pointer-events-none"></div>
    </Link>
  );
};

// 3. मुख्य कॉम्पोनेंट
const TourPackages = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      
      {/* Section Header/Title Area */}
      <div className="text-center mb-12">
        <p className="text-lg text-green-600 mb-0" style={{ fontFamily: '"Brush Script MT", cursive' }}>
          Packages
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center space-x-3">
          <span className="border-2 border-blue-600 px-4 py-2 rounded-md">
            Golden
          </span>
          <span>Triangles Tour</span>
        </h2>
      </div>

      {/* 4. पैकेज ग्रिड */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {tourPackages.map((pkg, index) => (
          <PackageCard 
            key={index} 
            name={pkg.name} 
            url={pkg.url}
            slug={pkg.slug}
            duration={pkg.duration} // 3. Duration ko pass karein
          />
        ))}
      </div>
    </section>
  );
};

export default TourPackages;