import React from 'react';
import { Briefcase, Users, ThumbsUp } from 'lucide-react';
import img from "../assets/hero/img1.webp";

// Icons data for the "We Are Offering" section
const offers = [
  { icon: Briefcase, title: "Amazing Tour Packages" },
  { icon: Users, title: "Group Tour Packages" },
  { icon: ThumbsUp, title: "Customized Tour Packages" },
];

// Reusable Input Component (with label support)
const FormInput = ({ id, label, placeholder, type = 'text', required = true }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mb-2 text-white font-medium tracking-wide">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
      className="w-full px-5 py-4 border border-white/40 bg-white/10 text-white rounded-lg 
                 placeholder-white/70 focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 
                 transition duration-300 text-lg"
    />
  </div>
);

const OfferFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted! (Demo)");
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white flex items-center justify-center space-x-2">
            <span className="border-2 border-blue-400 px-4 py-2 rounded-md font-normal text-blue-400 tracking-wider">
              W
            </span>
            <span className="text-3xl font-normal">e Are Offering</span>
          </h2>
        </div>

        {/* Offer Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {offers.map((offer, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[180px]">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-white mb-4 bg-white/10">
                <offer.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-semibold">{offer.title}</p>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl">
          
          {/* Row 1: Name, Email, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <FormInput id="name" label="Full Name" placeholder="Enter your full name" />
            <FormInput id="email" label="Email Address" placeholder="Enter your email" type="email" />
            <FormInput id="phone" label="Phone Number" placeholder="Enter your phone number" type="tel" />
          </div>

          {/* Row 2: Arrival, Departure, Persons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <FormInput id="arrival" label="Arrival Date" type="date" />
            <FormInput id="departure" label="Departure Date" type="date" />
            <FormInput id="persons" label="Travelling Person(s)" placeholder="Number of people" type="number" />
          </div>

          {/* Row 3: Package Name */}
          <div className="mb-6">
            <FormInput id="package" label="Package Name" placeholder="Enter your package name" />
          </div>

          {/* Row 4: Message */}
          <div className="mb-8">
            <label htmlFor="message" className="mb-2 block text-white font-medium tracking-wide">
              Additional Message / Query
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows="4"
              className="w-full px-5 py-4 border border-white/40 bg-white/10 text-white rounded-lg 
                         placeholder-white/70 focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 
                         transition duration-300 text-lg resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-3 bg-blue-600 text-white font-semibold rounded-md 
                         hover:bg-blue-700 shadow-lg transition duration-300 text-lg uppercase tracking-wide"
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
