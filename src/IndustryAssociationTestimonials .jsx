import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: "Unnati team is doing extraordinary work by taking extreme efforts for keeping their students updated and their conceptual training is exceptional..kudos! For team unnati",
    name: "Shubham Sawai",
  },
  {
    quote: "All teachers are doing their best to make student more responsible and knowledgeable. Thanks to all of your efforts you are taking on us.",
    name: "Aditya M Malode",
  },
];

const IndustryAssociationTestimonials = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6 bg-gradient-to-r from-green-50 via-white to-green-50 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-center text-green-800 mb-16">
        Industry Association Testimonials
      </h2>
      
      <div className="grid gap-10 md:grid-cols-2">
        {testimonials.map(({ quote, name }, idx) => (
          <div 
            key={idx} 
            className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-1"
          >
            <FaQuoteLeft className="text-green-500 text-4xl absolute -top-4 -left-3 opacity-70" />
            <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">“{quote}”</p>
            <p className="font-bold text-green-700 text-lg text-right">— {name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryAssociationTestimonials;
