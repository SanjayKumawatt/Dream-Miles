import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Frown } from 'lucide-react'; // Lucide icons

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6 bg-gray-50">
      
      <Frown className="w-20 h-20 text-red-500 mb-6" /> 

      {/* Main Error Code */}
      <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest mb-4">
        404
      </h1>
      
      {/* Error Message */}
      <div className="bg-blue-600 px-4 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      
      <p className="text-xl md:text-2xl text-gray-700 mt-10 mb-8">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Back to Home Button */}
      <Link 
        to="/" 
        className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
      >
        <Home className="w-5 h-5" />
        <span>Go Back Home</span>
      </Link>

      <p className="text-sm text-gray-500 mt-8">
        We apologize for the inconvenience.
      </p>
    </div>
  );
};

export default NotFound;