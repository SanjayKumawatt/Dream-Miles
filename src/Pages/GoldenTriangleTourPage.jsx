import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Filter, Star, Clock, MapPin, DollarSign } from 'lucide-react';

import img from "../assets/fifteendays/img1.jpg";

import img1 from "../assets/goldentriangle/img1.jpg";
import img2 from "../assets/goldentriangle/img2.jpg";
import img3 from "../assets/Footer/img5.png";
import img4 from "../assets/goldentriangle/img4.avif";
import img5 from "../assets/goldentriangle/img5.jpeg";



// --- Static Data ---
const companyName = "Dream Miles Consultants";

// GT Packages (Detailed data for listing)
const gtPackages = [
    // Row 1
    { id: 1, title: '02 Days Golden Triangle Tour', slug: 'gt-2-days', duration: '2 Days / 1 Night', price: 9900, rating: 4.5, url: img, cities: 'Delhi, Agra, Jaipur' }, 
    { id: 2, title: '03 Days Golden Triangle Tour', slug: 'gt-3-days', duration: '3 Days / 2 Nights', price: 13500, rating: 4.7, url: img, cities: 'Delhi, Agra, Jaipur' }, 
    { id: 3, title: '04 Days Golden Triangle Tour', slug: 'gt-4-days', duration: '4 Days / 3 Nights', price: 17800, rating: 4.8, url: img, cities: 'Delhi, Agra, Jaipur' }, 
    // Row 2
    { id: 4, title: '05 Days Golden Triangle Tour', slug: 'gt-5-days', duration: '5 Days / 4 Nights', price: 21500, rating: 4.7, url: img, cities: 'Delhi, Agra, Jaipur' }, 
    { id: 5, title: '06 Days Golden Triangle Tour', slug: 'gt-6-days', duration: '6 Days / 5 Nights', price: 24900, rating: 4.8, url: img, cities: 'Delhi, Agra, Jaipur' }, 
    { id: 6, title: '07 Days Golden Triangle Tour', slug: 'gt-7-days', duration: '7 Days / 6 Nights', price: 28500, rating: 4.9, url: img, cities: 'Delhi, Agra, Jaipur' },
    // Row 3 (Extensions)
    { id: 7, title: 'GT With Mathura Vrindavan', slug: 'gt-mathura-vrindavan', duration: '3 Days / 2 Nights', price: 15500, rating: 4.7, url: img1, cities: 'Delhi, Agra, Mathura, Vrindavan' },
    { id: 8, title: 'GT With Ajmer And Pushkar', slug: 'gt-ajmer-pushkar', duration: '4 Days / 3 Nights', price: 19800, rating: 4.8, url: img2, cities: 'Delhi, Agra, Jaipur, Ajmer, Pushkar' },
    { id: 9, title: 'GT With Bharatpur And Ranthambore', slug: 'gt-ranthambore', duration: '5 Days / 4 Nights', price: 26500, rating: 4.9, url: img3, cities: 'Delhi, Agra, Jaipur, Ranthambore' },
    // Row 4 (More Extensions)
    { id: 10, title: 'GT With Rajasthan Extended', slug: 'gt-with-rajasthan', duration: '10 Days / 9 Nights', price: 42000, rating: 4.9, url: img4, cities: 'GT + Jodhpur, Udaipur' },
    { id: 11, title: 'GT With Udaipur', slug: 'gt-with-udaipur', duration: '6 Days / 5 Nights', price: 28000, rating: 4.8, url: img5, cities: 'Delhi, Agra, Jaipur, Udaipur' },
];

// --- Sub-Component: Package Card (Tour By Duration Style) ---
const GTPackageCard = ({ packageInfo }) => {
    const bookingSlug = packageInfo.slug;
    
    return (
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl border border-gray-100">
            
            {/* Image (40% width) */}
            <div className="w-full md:w-2/5 flex-shrink-0">
                <img src={packageInfo.url} alt={packageInfo.title} className="w-full h-full object-cover" />
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
                        {/* New: Places Covered Detail */}
                        <div className="flex items-start space-x-2">
                            <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                            <span className="leading-tight text-sm text-gray-800 font-medium">{packageInfo.cities}</span>
                        </div>
                    </div>

                    {/* Highlights (Optional) */}
                    <ul className="list-disc list-inside text-xs text-gray-500 mt-3 hidden sm:block">
                        <li>Visit Taj Mahal, Red Fort, Amber Fort.</li>
                        <li>Private car and driver included.</li>
                    </ul>
                </div>

                {/* Price and Button (Ruppes in ₹) */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Starting From</p>
                        <p className="text-2xl font-extrabold text-green-600">
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


// --- Main Component ---
const GoldenTriangleTourPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            
            {/* Page Header / Breadcrumb (Tour By Duration Style) */}
            <div className="bg-gray-100 py-8 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-800">Golden Triangle Tour Packages</h1>
                    <div className="text-sm mt-1 text-gray-500">
                        <NavLink to="/" className="hover:text-blue-600">Home</NavLink> / <span className="font-semibold">Golden Triangle</span>
                    </div>
                </div>
            </div>

            {/* Main Content Grid (Sidebar + Listing) */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    {/* Column 1: Sidebar Filters (Fixed) */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2 border-b pb-2">
                                <Filter className="w-5 h-5 text-blue-600" />
                                <span>Filter By</span>
                            </h3>
                            
                            {/* Filter Group: Duration */}
                            <div className="mb-4">
                                <p className="font-semibold text-gray-700 mb-2">Duration (Days)</p>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> 3-4 Days</label>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> 5-7 Days</label>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> 8+ Days (Extended)</label>
                            </div>

                            {/* Filter Group: Extensions */}
                            <div className="mb-4">
                                <p className="font-semibold text-gray-700 mb-2">Extensions</p>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> Ranthambore</label>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> Udaipur</label>
                                <label className="flex items-center text-sm text-gray-600 mb-1"><input type="checkbox" className="mr-2" /> Mathura/Vrindavan</label>
                            </div>

                            {/* Filter Group: Price Range */}
                            <div className="mb-4">
                                <p className="font-semibold text-gray-700 mb-2">Price Range</p>
                                <input type="range" className="w-full" min="10000" max="50000" />
                                <p className="text-xs text-gray-500 text-center">₹ 10,000 - ₹ 50,000</p>
                            </div>
                            
                            {/* Custom CTA */}
                            <Link to="/contact" className="mt-4 block text-center text-sm font-semibold text-red-600 hover:text-red-700">
                                Request Custom Price
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Package Listing (3/4 जगह) */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Listing */}
                        {gtPackages.map((pkg) => (
                            <GTPackageCard key={pkg.id} packageInfo={pkg} />
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

export default GoldenTriangleTourPage;