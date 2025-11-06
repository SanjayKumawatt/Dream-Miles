import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Sun, Sunrise, Calendar } from 'lucide-react';
import img from "../assets/tourbyduration/hero.jpg";
import img1 from "../assets/tourbyduration/img1.jpg";
import img2 from "../assets/tourbyduration/img2.jpg";
import img3 from "../assets/tourbyduration/img3.jpg";
import img9 from "../assets/ourtop/img10.png";

// --- टूर ड्यूरेशन डेटा ---
const durationOptions = [
  {
    title: '1 - 3 Days Trips',
    subtitle: 'Quick Getaways & Short Breaks',
    slug: '1-3-days',
    icon: Sun,
    image:
      img1,
  },
  {
    title: '4 - 7 Days Tours',
    subtitle: 'Standard Vacations & Golden Triangle',
    slug: '4-7-days',
    icon: Clock,
    image:
      img2,
  },
  {
    title: '8 - 14 Days Holidays',
    subtitle: 'Extended Journeys & Multi-Region Tours',
    slug: '8-14-days',
    icon: Calendar,
    image:
      img3,
  },
  {
    title: '15+ Days Grand Tours',
    subtitle: 'Subcontinent Exploration',
    slug: '15-plus-days',
    icon: Sunrise,
    image:
     img9  },
];

// --- टूर ड्यूरेशन कार्ड ---
const DurationCard = ({ title, subtitle, slug, image, icon: Icon }) => (
  <Link
    to={`/tours/duration/${slug}`}
    className="relative block h-72 rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.03] cursor-pointer bg-gray-200"
  >
    {/* Background Image */}
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      onError={(e) => {
        e.target.src =
          'https://via.placeholder.com/400x300?text=Image+Unavailable';
      }}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"></div>

    {/* Text Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
      <Icon className="w-8 h-8 mb-2 text-blue-400 group-hover:text-red-400" />
      <h3 className="text-2xl font-bold mb-1 drop-shadow-md">{title}</h3>
      <p className="text-sm text-gray-200">{subtitle}</p>
    </div>
  </Link>
);

const TourByDurationPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* --- HERO SECTION (Improved) --- */}
      <div
        className="relative h-96 flex items-center justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center bottom', // 👈 sky issue fix
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-3 drop-shadow-lg">
            Tours By Duration
          </h1>
          <p className="text-lg font-medium drop-shadow-md">
            Find the perfect trip length for your next vacation.
          </p>
        </div>
      </div>

      {/* --- MAIN GRID SECTION --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Choose Your Adventure Length
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {durationOptions.map((option) => (
            <DurationCard key={option.slug} {...option} />
          ))}
        </div>

        {/* --- CUSTOM QUERY SECTION --- */}
        <div className="text-center mt-16 p-8 bg-white rounded-xl shadow-lg border-t-4 border-red-500">
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Can't find the exact duration?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Request a Custom Tour
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourByDurationPage;
