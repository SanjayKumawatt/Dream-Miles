import React from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from "../assets/ourtop/img1.png";
import img2 from "../assets/ourtop/img2.png";
import img3 from "../assets/ourtop/img3.png";
import img4 from "../assets/ourtop/img4.png";
import img5 from "../assets/ourtop/img5.png";
import img6 from "../assets/ourtop/img6.png";
import img7 from "../assets/ourtop/img7.png";
import img8 from "../assets/ourtop/img8.png";
import img9 from "../assets/ourtop/img9.png";
import img10 from "../assets/ourtop/img10.png";

const destinations = [
  { name: 'Red Fort (Delhi)', url: img1, slug: 'red-fort' },
  { name: 'Qutub Minar (Delhi)', url: img2, slug: 'qutub-minar' },
  { name: 'Humayun’s Tomb (Delhi)', url: img3, slug: 'humayuns-tomb' },
  { name: 'India Gate (Delhi)', url: img4, slug: 'india-gate' },
  { name: 'Lotus Temple (Delhi)', url: img5, slug: 'lotus-temple' },
  { name: 'Parliament Apartment (Delhi)', url: img6, slug: 'parliament-apartment' },
  { name: 'Jama Masjid (Delhi)', url: img7, slug: 'jama-masjid' },
  { name: 'Taj Mahal (Agra)', url: img8, slug: 'taj-mahal' },
  { name: 'Agra Fort (Agra)', url: img9, slug: 'agra-fort' },
  { name: 'Fatehpur Sikri (Agra)', url: img10, slug: 'fatehpur-sikri' },
];

const DestinationCard = ({ name, url, slug }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/destination/${slug}`)}
      className="relative h-48 sm:h-56 overflow-hidden rounded-lg shadow-md cursor-pointer group transition-transform duration-300 hover:scale-[1.03]"
    >
      {/* Image */}
      <img
        src={url}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <p className="text-white text-lg font-semibold">Read More</p>
      </div>

      {/* Name at bottom */}
      <div className="absolute bottom-0 left-0 p-3 text-white bg-gradient-to-t from-black/70 to-transparent">
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </div>
  );
};

const DestinationGrid = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="text-center mb-10">
        <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest mb-1">Destination</p>
        <h2 className="inline-block text-2xl md:text-3xl font-bold text-gray-800 px-4 py-2 rounded-lg">
          Our Top India Travel Destinations
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </section>
  );
};

export default DestinationGrid;
