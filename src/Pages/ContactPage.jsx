import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Mail, MapPin, Clock } from 'lucide-react';

import img from "../assets/ourtop/img9.png";

// --- Static Company Details ---
const companyInfo = {
    name: "DREAM MILES CONSULTANTS PRIVATE LIMITED",
    email: "booking@dream-miles.in",
    address: "Shop No. Fa - 152 Galaxy, Diamond Plaza, Greater, Gautam Buddha Nagar, Uttar Pradesh, India, 201318",
    workingHours: "Mon - Sat: 9:00 AM to 6:00 PM"
};

const ContactPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent successfully (Demo)!');
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-white">
            
            {/* Hero Section with Background Image */}
            <div
                className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">Contact Us</h1>
                    <div className="text-sm">
                        <NavLink to="/" className="hover:text-red-400">Home</NavLink> / <span className="font-semibold">Contact</span>
                    </div>
                </div>
            </div>

            {/* Main Content (2-Column Layout) */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Contact Information */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-600 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                            {companyInfo.name}
                        </h2>

                        {/* Email */}
                        <div className="flex items-start space-x-3">
                            <Mail className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Email</p>
                                <a href={`mailto:${companyInfo.email}`} className="text-red-600 hover:text-red-700 break-all">{companyInfo.email}</a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Visit Us</p>
                                <p className="text-sm text-gray-600">{companyInfo.address}</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start space-x-3">
                            <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-700">Working Hours</p>
                                <p className="text-sm text-gray-600">{companyInfo.workingHours}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Quick Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input type="text" placeholder="Your Full Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
                                <input type="email" placeholder="Your Email Address" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
                                <input type="text" placeholder="Subject / Package Inquiry" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
                            </div>
                            
                            <div>
                                <textarea placeholder="Your Message or Detailed Query" rows="5" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 resize-none"></textarea>
                            </div>

                            <button
                                type="submit"
                                className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
