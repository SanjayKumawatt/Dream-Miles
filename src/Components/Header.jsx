import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

import logo from "../assets/logo.png";

// डमी लोगो URL - इसे अपने असली लोगो इमेज URL से बदलें!
const DUMMY_LOGO_URL = logo; 

// नेविगेशन लिंक्स
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Tour By Duration', path: '/tour-by-duration' },
  { name: 'Golden Triangle Tour', path: '/golden-triangle-tour' },
  { name: 'Rajasthan Tour', path: '/rajasthan-tour' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // NavLink Styling Function: अब active page के लिए कोई विशेष स्टाइलिंग नहीं है।
  const getNavLinkClass = () =>
    `relative text-[15px] pb-1 font-bold text-gray-700 transition-colors duration-200 
     
     // Hover State (सिर्फ़ hover पर रेड अंडरलाइन और टेक्स्ट कलर)
     lg:hover:text-gray-800 
     lg:hover:after:content-[""] 
     lg:hover:after:absolute 
     lg:hover:after:bottom-[-8px] 
     lg:hover:after:left-0 
     lg:hover:after:w-full 
     lg:hover:after:h-1 
     lg:hover:after:bg-red-500 
     lg:hover:after:rounded-full
    `;

  // Logo Component
  const Logo = () => (
    <NavLink to="/" className="flex items-center">
      <img 
        src={DUMMY_LOGO_URL} 
        alt="Padha Tour & Travels Logo" 
        className="h-20 sm:h-12 w-auto object-contain" 
      />
      <p className='text-lg font-bold text-gray-800 mt-2'>DREAM MILES
</p>
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> 
          
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation (Hidden on small screens) */}
          <nav className="hidden lg:flex space-x-10 text-base"> 
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                // active state को ignore करने के लिए हम सीधे string क्लास का उपयोग कर सकते हैं 
                // या getNavLinkClass() को बिना arguments के कॉल कर सकते हैं।
                className={getNavLinkClass} 
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button (Hidden on large screens) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Toggled visibility) */}
      <div
        className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <nav className="flex flex-col space-y-1 px-2 pt-2 pb-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)} 
              // Mobile में active state को हटा दिया गया है
              className={() =>
                `block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors duration-200`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;