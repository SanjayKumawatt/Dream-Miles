import React from 'react';
import { Award, ThumbsUp, Mountain, Users, Landmark, Car } from 'lucide-react';

// डेटा पॉइंट्स (आपकी इमेज के अनुसार)
const features = [
  {
    icon: Award,
    title: "5000+ Tour Packages",
    description: "Explore our vast selection of curated tour packages to suit every taste.",
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfied Customers",
    description: "Our commitment ensures every journey is smooth and memorable.",
  },
  {
    icon: Mountain, // Hiking ke jagah Mountain
    title: "1000+ Adventures & Activities",
    description: "We offer thrilling adventure sports and unique local activities.",
  },
  {
    icon: Users,
    title: "500+ Group Tour Packages",
    description: "Specialized packages for groups, corporate travel, and family trips.",
  },
  {
    icon: Landmark, // Mosque ke jagah Landmark (Heritage sites ke liye best)
    title: "1000+ Heritage sites",
    description: "Dedicated tours covering India's rich history and cultural heritage.",
  },
  {
    icon: Car,
    title: "50+ Cars & Professional Drivers",
    description: "Reliable and comfortable transportation with experienced drivers.",
  },
];

// फीचर कार्ड कॉम्पोनेंट
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-green-700/50 mb-4 bg-green-50/50">
      <Icon className="w-8 h-8 text-green-700" strokeWidth={1.5} />
    </div>
    <h3 className="text-sm font-semibold text-green-800 mb-1">{title}</h3>
    <p className="text-xs text-gray-500 hidden sm:block">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="bg-amber-50/50 py-16 md:py-24" style={{ backgroundColor: '#fdfdf4' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-blue-700 flex items-center justify-center space-x-2">
            <span className="border-2 border-blue-600 px-4 py-2 rounded-md font-normal text-blue-800 tracking-wider">
              W
            </span>
            <span className="text-3xl font-normal text-blue-700">hy Choose Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
