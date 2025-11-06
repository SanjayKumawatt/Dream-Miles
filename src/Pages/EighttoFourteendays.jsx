import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Filter, Star, Clock, MapPin, DollarSign } from 'lucide-react';

import img1 from "../assets/eighttofourteen/img1.jpg";
import img2 from "../assets/eighttofourteen/img2.jpg";
import img3 from "../assets/eighttofourteen/img3.png";
import img4 from "../assets/eighttofourteen/img4.jpeg";


// --- MOCK PACKAGE DATA (8-14 Days Tours - All India) ---
const longDurationPackages = [
    {
        id: 301,
        title: '12 Days / 11 Nights Grand Rajasthan Circuit',
        slug: 'rajasthan-12d',
        duration: '12 Days',
        price: 55000, // INR
        rating: 4.9,
        url: img1, // Jaipur Fort
        cities: 'Jaipur, Jodhpur, Udaipur, Jaisalmer',
        highlights: ['Desert Safari with cultural show', 'City Palace Udaipur', 'Mehrangarh Fort']
    },
    {
        id: 302,
        title: '10 Days / 9 Nights North East Discovery',
        slug: 'northeast-10d',
        duration: '10 Days',
        price: 48500, // INR
        rating: 4.7,
        url: img2, // Sikkim/Himalayas
        cities: 'Gangtok, Darjeeling, Kalimpong',
        highlights: ['Tsomgo Lake', 'Tiger Hill Sunrise', 'Nathula Pass (Optional)']
    },
    {
        id: 303,
        title: '9 Days / 8 Nights Leh-Ladakh Bike Expedition',
        slug: 'ladakh-9d-bike',
        duration: '9 Days',
        price: 38000, // INR (Excluding Bike Rent)
        rating: 4.8,
        url: img3, // Ladakh road
        cities: 'Leh, Nubra Valley, Pangong Lake',
        highlights: ['Khardungla Pass', 'Magnetic Hill', 'Monastery Visits']
    },
    {
        id: 304,
        title: '14 Days / 13 Nights South India Temple & Nature',
        slug: 'south-india-14d',
        duration: '14 Days',
        price: 65000, // INR
        rating: 4.6,
        url: img4, // Madurai Temple
        cities: 'Chennai, Madurai, Kanyakumari, Kochi, Munnar',
        highlights: ['Meenakshi Amman Temple', 'Vivekananda Rock Memorial', 'Periyar Wildlife Sanctuary']
    },
];

// --- Sub-Component: Tour Card (Using the same structure as previous page) ---
const PackageCard = ({ packageInfo }) => {
    const bookingSlug = packageInfo.slug;
    
    return (
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl border border-gray-100">
            
            {/* Image (40% width) */}
            <div className="w-full md:w-2/5 flex-shrink-0">
                <img 
                    src={packageInfo.url} 
                    alt={packageInfo.title} 
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Details (60% width) */}
            <div className="p-4 md:p-6 flex flex-col justify-between w-full md:w-3/5">
                <div>
                    {/* Title and Rating */}
                    <Link className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                        {packageInfo.title}
                    </Link>
                    <div className="flex items-center text-sm text-yellow-500 mt-1 mb-3">
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <span className="text-gray-600 ml-1 font-semibold">{packageInfo.rating} / 5</span>
                    </div>

                    {/* Meta Info */}
                    <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-red-500" />
                            <span>{packageInfo.duration}</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                            <span className="leading-tight">{packageInfo.cities}</span>
                        </div>
                    </div>

                    {/* Highlights */}
                    <ul className="list-disc list-inside text-xs text-gray-500 mt-3 hidden sm:block">
                        {packageInfo.highlights.slice(0, 2).map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                </div>

                {/* Price and Button (Ruppes in ₹) */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Starting From</p>
                        <p className="text-2xl font-extrabold text-green-600">
                            {/* ₹ Symbol use kiya gaya hai */}
                            <span className="text-xl">₹</span> {packageInfo.price.toLocaleString('en-IN')}
                        </p>
                    </div>
                    <Link
                        to={`/book-now/${bookingSlug}`}
                        state={{ title: packageInfo.title, imageUrl: packageInfo.url }}
                        className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};


const EightToFourteenDayTours = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            
            {/* Page Header / Breadcrumb */}
            <div className="bg-blue-700 py-8 border-b border-gray-200">
                <div className="container mx-auto px-4 text-white">
                    <h1 className="text-3xl font-bold">8 - 14 Days Comprehensive Tours</h1>
                    <p className="text-lg font-light mt-1">Discover a complete region with our comprehensive and immersive tour packages.</p>
                    <div className="text-sm mt-2">
                        <NavLink to="/" className="hover:text-blue-200">Home</NavLink> / 
                        <NavLink to="/tour-by-duration" className="hover:text-blue-200 ml-1">Duration</NavLink> / 
                        <span className="ml-1 font-semibold">8-14 Days</span>
                    </div>
                </div>
            </div>

            {/* Main Content Grid (Sidebar + Listing) */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    {/* Column 1: Sidebar Filters (Static) */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2 border-b pb-2">
                                <Filter className="w-5 h-5 text-blue-600" />
                                <span>Filter Tours</span>
                            </h3>
                            
                            {/* Filter Group: Duration (Fixed for this page) */}
                            <div className="mb-4 p-3 bg-red-50 rounded-lg">
                                <p className="font-semibold text-gray-800 mb-1 flex items-center">
                                    <Clock className='w-4 h-4 mr-2 text-red-600'/> 
                                    Duration Filtered
                                </p>
                                <p className="text-sm text-red-600 font-bold">8 to 14 Days</p>
                            </div>

                            {/* Filter Group: Location */}
                            <div className="mb-4">
                                <p className="font-semibold text-gray-700 mb-2">Popular Circuits</p>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> Rajasthan Circuit</label>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> Himalayan Expeditions</label>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> South India Temples</label>
                            </div>

                            {/* Filter Group: Price Range */}
                            <div className="mb-4">
                                <p className="font-semibold text-gray-700 mb-2">Price Range</p>
                                <input type="range" className="w-full" min="30000" max="80000" />
                                <p className="text-xs text-gray-500 text-center">₹ 30,000 - ₹ 80,000</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Package Listing */}
                    <div className="lg:col-span-3 space-y-6">
                        {longDurationPackages.map((pkg) => (
                            <PackageCard key={pkg.id} packageInfo={pkg} />
                        ))}

                        {/* Pagination Placeholder */}
                        <div className="flex justify-center mt-8">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mx-1">1</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EightToFourteenDayTours;