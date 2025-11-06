import React from 'react';
import { useParams, Link } from 'react-router-dom';
import img1 from "../assets/packages/img1.png";
import img2 from "../assets/packages/img2.png";
import img3 from "../assets/packages/img3.png";
import img4 from "../assets/packages/img4.png";
import img5 from "../assets/packages/img5.png";
import img6 from "../assets/ourtop/img10.png";

// --- Package Details Data Map ---
// Yahaan humne TourPackages.jsx se data lekar use overview aur highlights ke saath expand kiya hai
const tourPackageDetailsMap = {
  '2-days-golden-triangle': {
    title: '02 Days Golden Triangle Tour',
    subtitle: 'Golden Triangle Packages',
    duration: '02 Days / 01 Night',
    image: img1,
    overview: "Experience the essence of India's Golden Triangle in a quick 2-day tour. Visit the major landmarks of Delhi, Agra, and Jaipur, perfect for those with limited time but a desire to see India's most iconic sights.",
    highlights: [
      "Visit Taj Mahal in Agra.",
      "Explore key sights in Delhi.",
      "Quick tour of Jaipur's highlights.",
      "Private air-conditioned car."
    ]
  },
  '3-days-golden-triangle': {
    title: '03 Days Golden Triangle Tour',
    subtitle: 'Golden Triangle Packages',
    duration: '03 Days / 02 Nights',
    image: img2,
    overview: "Our most popular package. This 3-day tour provides a comprehensive experience of Delhi, Agra, and Jaipur, balancing sightseeing with comfort. See the Taj Mahal at sunrise, explore Amber Fort, and enjoy the rich culture.",
    highlights: [
      "Sunrise visit to the Taj Mahal.",
      "Guided tour of Amber Fort in Jaipur.",
      "Explore Old and New Delhi.",
      "Stay in comfortable 3-star hotels."
    ]
  },
  'golden-triangle-ranthambore': {
    title: 'Golden Triangle Tour With Bharatpur And Ranthambore',
    subtitle: 'Wildlife & Heritage Tour',
    duration: '05 Days / 04 Nights',
    image: img3,
    overview: "Combine the classic Golden Triangle with the thrill of wildlife. After visiting Delhi, Agra, and Jaipur, embark on jungle safaris in Ranthambore National Park, home of the majestic Bengal tiger.",
    highlights: [
      "All Golden Triangle sights.",
      "Multiple jungle safaris in Ranthambore.",
      "Visit Bharatpur Bird Sanctuary.",
      "An ideal mix of culture and nature."
    ]
  },
  // (Aap baaki slugs ke liye bhi yahaan data add kar sakte hain)
   // --- NAYE SLUGS YAHAN SHAMIL KIYE GAYE HAIN ---
  'golden-triangle-ajmer-pushkar': {
    title: 'Golden Triangle Tour With Ajmer And Pushkar',
    subtitle: 'Heritage & Pilgrimage Tour',
    duration: '04 Days / 03 Nights',
    image: img5,
    overview: "Extend your Golden Triangle experience with a visit to the spiritual cities of Ajmer and Pushkar. Explore the famous Brahma Temple, Pushkar Lake, and the Dargah Sharif in Ajmer.",
    highlights: [
      "All Golden Triangle sights.",
      "Visit Ajmer Sharif Dargah.",
      "Explore Pushkar Lake and Brahma Temple.",
      "Camel safari experience (optional)."
    ]
  },
  'golden-triangle-ranthambore': {
    title: 'Golden Triangle Tour With Bharatpur And Ranthambore',
    subtitle: 'Wildlife & Heritage Tour',
    duration: '05 Days / 04 Nights',
    image: img6,
    overview: "Combine the classic Golden Triangle with the thrill of wildlife. After visiting the historical cities, embark on jungle safaris in Ranthambore National Park, home of the majestic Bengal tiger.",
    highlights: [
      "All Golden Triangle sights.",
      "Multiple jungle safaris in Ranthambore.",
      "Visit Bharatpur Bird Sanctuary.",
      "An ideal mix of culture and nature."
    ]
  },

  // Fallback data agar slug match nahi hota
  default: {
    title: 'Tour Package Details',
    subtitle: 'Package Information',
    duration: 'N/A',
    image: img4,
    overview: "Details for this tour package are not available yet. Please check back later or contact us for more information.",
    highlights: ["Information coming soon."]
  }
};

// --- Main Component ---
const TourPackagePage = () => {
  // Slug ko URL se lein (e.g., '2-days-golden-triangle')
  const { slug } = useParams();

  // Slug ke basis par 'tourPackageDetailsMap' se sahi data nikalein
  const tour = tourPackageDetailsMap[slug] || tourPackageDetailsMap.default;

  const fallbackImageUrl = 'https://via.placeholder.com/800x500.png?text=Image+Not+Found';

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tour.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/70"></div> 
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full px-4 sm:px-16 pb-12 text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 drop-shadow-lg capitalize">{tour.title}</h1>
          <p className="text-lg md:text-xl font-medium text-gray-200">{tour.subtitle}</p>
        </div>
      </div>
      
      {/* 2. MAIN CONTENT SECTION */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column (Single Image) */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img 
                src={tour.image} // Data map se image yahaan dikhayein
                alt={tour.title} 
                className="w-full h-auto max-h-[500px] object-cover" 
                onError={(e) => { e.currentTarget.src = fallbackImageUrl; }}
              />
            </div>
          </div>

          {/* Right Column (Overview, Highlights, CTAs) */}
          <div className="lg:col-span-1">
            <div className="flex items-start mb-6">
              <span className="text-7xl font-bold text-blue-600 mr-2 border-2 border-blue-600 px-2 py-1 rounded-sm leading-none inline-block">T</span>
              <h2 className="text-4xl font-extrabold text-gray-800 pt-3">our overview</h2>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              <strong>Duration: {tour.duration}</strong><br />
              {tour.overview}
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Highlights :</h3>
            <ul className="space-y-3 mb-10 list-disc pl-5">
              {tour.highlights.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Buttons (Links) */}
            <div className="flex space-x-4">
              {/* BOOK NOW Link */}
              <Link
                to={`/book-now/${slug}`}
                // Booking page ko 'state' mein sahi image aur title bhejein
                state={{ title: tour.title, imageUrl: tour.image }}
                className="text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 flex-1"
              >
                BOOK NOW
              </Link>
              
              {/* CALL NOW Link */}
              <Link
                to="/contact"
                className="text-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-200 flex-1"
              >
                CALL NOW
              </Link>
            </div>
            
            <Link to="/" className="mt-8 block text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackagePage;