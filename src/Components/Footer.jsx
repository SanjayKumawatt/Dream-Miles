import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock } from 'lucide-react';

import img1 from "../assets/Footer/img1.png";
import img2 from "../assets/Footer/img2.png";
import img3 from "../assets/Footer/img3.png";
import img4 from "../assets/Footer/img4.png";
import img5 from "../assets/Footer/img5.png";
import img6 from "../assets/Footer/img6.png";

import main from "../assets/Footer/main.png";

// --- Static Data ---
const companyInfo = {
  name: "DREAM MILES CONSULTANTS PRIVATE LIMITED",
  email: "booking@dream-miles.in",
  address:
    "Shop No. Fa - 152 Galaxy, Diamond Plaza, Greater, Gautam Buddha Nagar, Gautam Buddha Nagar, Uttar Pradesh, India, 201318",
  shortAddress:
    "Shop No. Fa - 152 Galaxy, Diamond Plaza, Greater, Gautam Buddha Nagar, Uttar Pradesh, India, 201318",
  copyrightRef: "Dream Miles",
};

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Tour By Duration", path: "/tour-by-duration" },
  { name: "Golden Triangle Tour", path: "/golden-triangle-tour" },
  { name: "Rajasthan Tour", path: "/rajasthan-tour" },
  { name: "Contact", path: "/contact" },
];

const imageGrid = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  
];

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* 1. TOP SECTION (3 Columns) */}
      <div className="bg-[#363636] py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
            {/* Column 1: Image Grid */}
            <div>
              <div className="grid grid-cols-3 gap-1">
                {imageGrid.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-auto object-cover aspect-square"
                    style={{ minHeight: "50px" }}
                  />
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="text-right">
              <h3 className="text-xl font-bold text-white mb-4">Quick Link</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`text-sm hover:text-white transition-colors ${
                        link.name === "Home"
                          ? "inline-block bg-[#ff6a30] px-4 py-1 rounded"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="relative text-right pl-6 border-l-2 border-[#ff6a30] min-h-[200px]">
              <h3 className="text-xl font-bold text-white mb-4">CONTACT</h3>

              {/* Email */}
              <div className="flex justify-end items-center space-x-2 mb-2">
                <p className="text-sm">{companyInfo.email}</p>
                <Mail className="w-5 h-5 text-[#ff6a30]" />
              </div>

              {/* 24/7 Hours */}
              <div className="flex justify-end items-center space-x-2 mb-4">
                <p className="text-sm">24/7 hours</p>
                <Clock className="w-5 h-5 text-[#ff6a30]" />
              </div>

              {/* Address */}
              <div className="flex justify-end items-start space-x-2">
                <p className="text-sm">{companyInfo.shortAddress}</p>
                <MapPin className="w-5 h-5 text-[#ff6a30] flex-shrink-0 mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. COPYRIGHT SECTION */}
      <div className="bg-gray-800 text-center py-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">
          Copyright © 2025 {companyInfo.name} | Developed By:{" "}
          <span className="text-[#ff6a30] font-semibold">
            {companyInfo.copyrightRef}
          </span>
        </p>
      </div>

      {/* 3. Skyline Image (Without WhatsApp Icon) */}
      <div className="relative h-58 md:h-96 bg-black overflow-hidden">
        <img
          src={main}
          alt="City Skyline"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </footer>
  );
};

export default Footer;
