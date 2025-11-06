import React from 'react';
import { useParams, Link } from 'react-router-dom';

// --- Aapke Local Images Ko Yahaan Import Karein ---
// (Path ko adjust karein agar yeh file alag folder mein hai)
import img1 from "../assets/ourtop/img1.png";
import img2 from "../assets/ourtop/img2.png";
import img3 from "../assets/ourtop/img3.png";
import img4 from "../assets/ourtop/img4.png";
import img5 from "../assets/ourtop/img5.png";
import img6 from "../assets/ourtop/img6.png";
import img7 from "../assets/ourtop/img7.png";
import img8 from "../assets/ourtop/img8.png";
import img9 from "../assets/ourtop/img9.png";
import img10 from "../assets/ourtop/img10.png";

// --- Data Map (Aapke Grid Ke Slugs Ke Saath) ---
const tourDetailsMap = {
  'red-fort': {
    title: 'Red Fort (Delhi)',
    subtitle: 'Delhi Tours',
    image: img1, // Main image
    heroUrl: img1, // Hero background image
    overview: "The Red Fort or Lal Qila is a historic fort in Old Delhi, Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638...",
    highlights: [
      "Explore the historic Red Fort complex.",
      "Learn about Mughal architecture and history.",
      "Visit the Diwan-i-Aam and Diwan-i-Khas.",
      "Private day trip with an English speaking driver."
    ]
  },
  'qutub-minar': {
    title: 'Qutub Minar (Delhi)',
    subtitle: 'Delhi Tours',
    image: img2,
    heroUrl: img2,
    overview: "Qutub Minar is a minaret and 'victory tower' that forms part of the Qutb complex, a UNESCO World Heritage Site in the Mehrauli area of New Delhi, India.",
    highlights: [
      "Visit the tallest brick minaret in the world.",
      "Explore the Qutb complex and Iron Pillar.",
      "Learn about its Indo-Islamic architectural style."
    ]
  },
  'humayuns-tomb': {
    title: 'Humayun’s Tomb (Delhi)',
    subtitle: 'Delhi Tours',
    image: img3,
    heroUrl: img3,
    overview: "Humayun's tomb is the tomb of the Mughal Emperor Humayun in Delhi, India. The tomb was commissioned by Humayun's first wife and chief consort, Empress Bega Begum, in 1558...",
    highlights: [
      "UNESCO World Heritage Site.",
      "A stunning example of Mughal architecture.",
      "Visit the Charbagh (four-part garden)."
    ]
  },
  'india-gate': {
    title: 'India Gate (Delhi)',
    subtitle: 'Delhi Tours',
    image: img4,
    heroUrl: img4,
    overview: "The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the 'ceremonial axis' of New Delhi, formerly called Kingsway.",
    highlights: [
      "War memorial dedicated to Indian soldiers.",
      "Visit the Amar Jawan Jyoti.",
      "Popular spot for evening strolls."
    ]
  },
  'lotus-temple': {
    title: 'Lotus Temple (Delhi)',
    subtitle: 'Delhi Tours',
    image: img5,
    heroUrl: img5,
    overview: "The Lotus Temple, located in Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986. Notable for its flowerlike shape, it has become a prominent attraction in the city.",
    highlights: [
      "Visit this architectural marvel.",
      "Experience the serene and peaceful environment.",
      "Open to all, regardless of religion."
    ]
  },
  'parliament-apartment': {
    title: 'Parliament Apartment (Delhi)',
    subtitle: 'Delhi Tours',
    image: img6,
    heroUrl: img6,
    overview: "The Parliament House in New Delhi is the seat of the Parliament of India. It is an iconic building designed by British architects Sir Edwin Lutyens and Sir Herbert Baker.",
    highlights: [
      "See the seat of the Indian Parliament.",
      "Marvel at the colonial architecture.",
      "Located in the heart of New Delhi."
    ]
  },
  'jama-masjid': {
    title: 'Jama Masjid (Delhi)',
    subtitle: 'Delhi Tours',
    image: img7,
    heroUrl: img7,
    overview: "The Masjid-i Jehan-Numa, commonly known as the Jama Masjid of Delhi, is one of the largest mosques in India. It was built by the Mughal Emperor Shah Jahan between 1650 and 1656.",
    highlights: [
      "One of the largest mosques in India.",
      "Climb the minaret for a view of Old Delhi.",
      "Experience the vibrant culture of Old Delhi."
    ]
  },
  'taj-mahal': {
    title: 'Taj Mahal (Agra)',
    subtitle: 'Agra Same Day Trips',
    image: img8,
    heroUrl: img8,
    overview: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan...",
    highlights: [
      "Visit one of the Seven Wonders of the World.",
      "Experience the beauty of Mughal architecture.",
      "Private guided tour with an expert."
    ]
  },
  'agra-fort': {
    title: 'Agra Fort (Agra)',
    subtitle: 'Agra Tours',
    image: img9,
    heroUrl: img9,
    overview: "Agra Fort is a historical fort in the city of Agra in India. It was the main residence of the emperors of the Mughal Dynasty until 1638, when the capital was shifted from Agra to Delhi.",
    highlights: [
      "UNESCO World Heritage Site.",
      "Explore the magnificent palaces and mosques.",
      "Get a stunning view of the Taj Mahal."
    ]
  },
  'fatehpur-sikri': {
    title: 'Fatehpur Sikri (Agra)',
    subtitle: 'Agra Tours',
    image: img10,
    heroUrl: img10,
    overview: "Fatehpur Sikri is a town in the Agra District of Uttar Pradesh, India. The city itself was founded as the capital of Mughal Empire in 1571 by Emperor Akbar.",
    highlights: [
      "Explore the abandoned Mughal capital.",
      "Visit the Buland Darwaza and Jama Masjid.",
      "A perfect day trip from Agra."
    ]
  },
  
  // Fallback data agar slug match nahi hota
  default: {
    title: 'Tour Details',
    subtitle: 'Tour Information',
    image: 'https://via.placeholder.com/800x500.png?text=Image+Not+Found',
    heroUrl: 'https://via.placeholder.com/1200x400.png?text=Tour',
    overview: "Details for this tour are not available yet. Please check back later or contact us for more information.",
    highlights: ["Information coming soon."]
  }
};

// --- Main Component ---
const DestinationPage = () => {
  // Slug ko URL se lein (e.g., 'red-fort')
  const { slug } = useParams();

  // Slug ke basis par 'tourDetailsMap' se sahi data nikalein
  const tour = tourDetailsMap[slug] || tourDetailsMap.default;

  const fallbackImageUrl = 'https://via.placeholder.com/800x500.png?text=Image+Not+Found';

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tour.heroUrl})` }}
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
              ← Back to Destinations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;