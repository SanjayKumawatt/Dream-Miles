import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

const BookingPage = () => {
  const { slug } = useParams();
  const location = useLocation();

  const tourTitle = location.state?.title || slug.replace(/-/g, ' ');
  const tourImageUrl =
    location.state?.imageUrl ||
    'https://via.placeholder.com/400x200.png?text=Tour+Image';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your booking request has been submitted! (Demo)');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden md:flex">
        {/* Left Side (Tour Image) */}
        <div className="md:w-1/2">
          <img
            src={tourImageUrl}
            alt={tourTitle}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Right Side (Form Section) */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Book Your Tour
          </h1>
          <p className="text-lg text-blue-600 font-semibold mb-6 capitalize">
            {tourTitle}
          </p>

          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Travelling Person */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Travelling Person(s)
              </label>
              <input
                type="number"
                min="1"
                placeholder="e.g. 2"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Arrival Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Arrival Date
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Departure Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Departure Date
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Package Name */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Package Name
              </label>
              <input
                type="text"
                defaultValue={tourTitle}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Message Box */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Message (Optional)
              </label>
              <textarea
                rows="3"
                placeholder="Write any additional information here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Submit Booking Request
              </button>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
