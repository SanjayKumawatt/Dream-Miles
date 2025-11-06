import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, ThumbsUp, Mail, Phone, Calendar, MessageSquare } from 'lucide-react';
import img from "../assets/hero/img1.webp";

// Icons data for the "We Are Offering" section
const offers = [
  { icon: Briefcase, title: "Amazing Tour Packages" },
  { icon: Users, title: "Group Tour Packages" },
  { icon: ThumbsUp, title: "Customized Tour Packages" },
];

// Background Image for the form hero section
const OFFER_BG_IMAGE = img;

// Helper component for dark themed inputs
const FormInput = ({ id, placeholder, type = 'text', required = true }) => (
  <input
    type={type}
    id={id}
    placeholder={placeholder}
    required={required}
    className="w-full px-5 py-4 border-2 border-white/50 bg-white/10 text-white rounded-lg placeholder-white/80 focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500/50 transition duration-300 text-lg"
  />
);

const OfferFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic yahaan aayega
    console.log('Offer Form Submitted (Demo)!');
    // window.location.href = '/contact'; // Ya kisi thank you page par redirect
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${OFFER_BG_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        
        {/* Section Title (Image jaisa) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white flex items-center justify-center space-x-2">
            <span className="border-2 border-blue-400 px-4 py-2 rounded-md font-normal text-blue-400 tracking-wider">
              W
            </span>
            <span className="text-3xl font-normal">e Are Offering</span>
          </h2>
        </div>
        
        {/* Offer Icons (Image jaisa) */}
        <div className="flex justify-center space-x-4 mb-16">
          {offers.map((offer, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[180px]">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-white mb-4 bg-white/10">
                <offer.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-semibold">{offer.title}</p>
            </div>
          ))}
        </div>

        {/* --- MAIN FORM GRID --- */}
        <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto">
          
          {/* Row 1: Name, Email, Email (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <FormInput id="name" placeholder="Name" required={true} />
            <FormInput id="email1" placeholder="Email" type="email" required={true} />
            <FormInput id="email2" placeholder="Email" type="email" required={true} />
          </div>

          {/* Row 2: Phone, Arrival, Departure (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <FormInput id="phone" placeholder="Phone Number" type="tel" required={true} />
            <FormInput id="arrivalDate" placeholder="Arrival Date" type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} required={false} />
            <FormInput id="departureDate" placeholder="Departure Date" type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} required={false} />
          </div>

          {/* Row 3: Persons, Persons, Package Name (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <FormInput id="persons1" placeholder="Travelling Person" type="number" required={false} />
            <FormInput id="persons2" placeholder="Travelling Person" type="number" required={false} />
            <FormInput id="packageName1" placeholder="Pacackge Name" required={false} />
          </div>

          {/* Row 4: Large Message/Package Name Textarea */}
          <div className="mb-8">
            <textarea
              id="packageName2"
              placeholder="Pacackge Name / Detailed Query"
              rows="4"
              className="w-full px-5 py-4 border-2 border-white/50 bg-white/10 text-white rounded-lg shadow-lg placeholder-white/80 focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500/50 transition duration-300 text-lg resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-md shadow-2xl hover:bg-green-700 transition duration-300 text-xl uppercase tracking-wider"
            >
              Send
            </button>
          </div>
        </form>
        
      </div>
    </section>
  );
};

export default OfferFormSection;