import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

import img1 from "../assets/hero/img1.webp";
import img2 from "../assets/hero/img2.jpg";
import img3 from "../assets/hero/img3.jpg";

// स्लाइडर के लिए डमी इमेजेज
const slides = [
  { 
    id: 1, 
    url: img1
  },
  { 
    id: 2, 
    // आपकी अपलोड की गई इमेज का URL (मान लें कि इसे यहाँ इस्तेमाल किया जा सकता है)
    // NOTE: आपको यह URL अपनी इमेज अपलोड करने के बाद खुद बदलना होगा।
    url: img2 // कृपया इस URL को अपनी होस्ट की गई इमेज से बदलें
  },
  { 
    id: 3, 
    url: img3 
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // स्लाइड को आगे बढ़ाना (Next Slide Function)
  const nextSlide = () => {
    // Infinite loop logic: अगर आख़िरी स्लाइड पर हैं, तो 0 (पहली स्लाइड) पर वापस जाएँ
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // स्लाइड को पीछे ले जाना (Previous Slide Function)
  const prevSlide = () => {
    // Infinite loop logic: अगर पहली स्लाइड पर हैं, तो आख़िरी स्लाइड पर जाएँ
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };
  
  // 💡 Auto-Slide और Infinite Loop के लिए useEffect
  // यह हुक हर 5000ms (5 सेकंड) में nextSlide को कॉल करेगा
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); 
    
    // कॉम्पोनेंट अनमाउंट होने पर या जब dependencies बदलती हैं, तो इंटरवल को साफ़ करें
    return () => clearInterval(slideInterval);
  }, [currentIndex]); // currentIndex बदलने पर टाइमर रीसेट करें

  return (
    <div className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden">
      
      {/* Slide Images Container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="min-w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.url})` }}
            aria-label={`Travel image slide ${slide.id}`}
          >
            {/* आप यहाँ स्टैटिक टेक्स्ट ओवरले जोड़ सकते हैं, अगर ज़रूरी हो */}
            {/* <div className="absolute inset-0 bg-black/10"></div> */}
          </div>
        ))}
      </div>

      {/* Left Arrow Button */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow Button */}
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default ImageSlider;