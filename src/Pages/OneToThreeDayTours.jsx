import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Filter, Star, Clock, MapPin, IndianRupee, Sunrise } from 'lucide-react';

import img1 from "../assets/onetothree/img1.jpg";
import img2 from "../assets/ourtop/img8.png";
import img3 from "../assets/onetothree/img3.webp";
import img4 from "../assets/onetothree/img4.webp";

// --- MOCK PACKAGE DATA (1-3 Days Tours - All India) ---
const shortDurationPackages = [
    {
        id: 101,
        title: '2 Days Golden Temple & City Tour',
        slug: 'amritsar-2d',
        duration: '2 Days / 1 Night',
        price: 8500,
        rating: 4.8,
        url: img1, // Golden Temple
        cities: 'Amritsar',
        highlights: ['Golden Temple Visit', 'Wagah Border Ceremony', 'Local Food']
    },
    {
        id: 102,
        title: '3 Days Agra & Delhi Express Tour',
        slug: 'delhi-agra-3d',
        duration: '3 Days / 2 Nights',
        price: 12000,
        rating: 4.7,
        url: img2, // Taj Mahal
        cities: 'Delhi, Agra',
        highlights: ['Taj Mahal', 'Red Fort', 'India Gate', 'Qutub Minar']
    },
    {
        id: 103,
        title: '1 Day Mumbai Local Sightseeing',
        slug: 'mumbai-local-1d',
        duration: '1 Day',
        price: 3800,
        rating: 4.5,
        url: img3, // Marine Drive/Mumbai
        cities: 'Mumbai',
        highlights: ['Gateway of India', 'Marine Drive', 'Dharavi Slum Tour (Optional)']
    },
    {
        id: 104,
        title: '3 Days Shimla & Kufri Getaway',
        slug: 'shimla-3d',
        duration: '3 Days / 2 Nights',
        price: 10500,
        rating: 4.6,
        url: img4, // Shimla Mountain View
        cities: 'Shimla, Kufri',
        highlights: ['The Ridge', 'Mall Road', 'Kufri Snow Point']
    },
];

// --- Sub-Component: Tour Card (Same as before) ---
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

                {/* Price and Button */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Starting From</p>
                        <p className="text-2xl font-extrabold text-green-600">
                            <IndianRupee className="w-5 h-5 inline-block -mt-1" />
                            {packageInfo.price.toLocaleString('en-IN')}
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


const OneToThreeDayTours = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            
            {/* Page Header / Breadcrumb */}
            <div className="bg-blue-700 py-8 border-b border-gray-200">
                <div className="container mx-auto px-4 text-white">
                    <h1 className="text-3xl font-bold">1 - 3 Days City Breaks & Tours</h1>
                    <p className="text-lg font-light mt-1">Quick escapes across India for a refreshing start!</p>
                    <div className="text-sm mt-2">
                        <NavLink to="/" className="hover:text-blue-200">Home</NavLink> / 
                        <NavLink to="/tour-by-duration" className="hover:text-blue-200 ml-1">Duration</NavLink> / 
                        <span className="ml-1 font-semibold">1-3 Days</span>
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
                                <p className="text-sm text-red-600 font-bold">1 to 3 Days</p>
                            </div>

                            {/* Filter Group: Location */}
                            <div className="mb-4">
                                <p className="font-semibold text-gray-700 mb-2">Popular Destinations</p>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> Delhi</label>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> Mumbai</label>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> Hill Stations</label>
                            </div>

                            {/* Filter Group: Price Range */}
                            <div className="mb-4">
                                <p className="font-semibold text-gray-700 mb-2">Price Range</p>
                                <input type="range" className="w-full" min="3000" max="15000" />
                                <p className="text-xs text-gray-500 text-center">₹ 3,000 - ₹ 15,000</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Package Listing */}
                    <div className="lg:col-span-3 space-y-6">
                        {shortDurationPackages.map((pkg) => (
                            <PackageCard key={pkg.id} packageInfo={pkg} />
                        ))}

                        {/* Pagination Placeholder */}
                        <div className="flex justify-center mt-8">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mx-1">1</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg mx-1 hover:bg-gray-400">2</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneToThreeDayTours;