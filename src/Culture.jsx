import React from 'react'

// Sample images (replace with your actual images)
const IMAGES = [
  "https://cdn-icons-png.flaticon.com/512/1087/1087965.png", // training
  "https://cdn-icons-png.flaticon.com/512/1705/1705579.png", // certification
  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // internship
]

const CARDS = [
  {
    title: "TRAINING",
    img: IMAGES[0],
    text: "Expand your knowledge! We offer hands-on training to build career-ready skills for any job challenge.",
  },
  {
    title: "CERTIFICATION",
    img: IMAGES[1],
    text: "IT professionals with Red Hat Certified System Administrator (RHCSA ®) can manage essential system-administration tasks in Red Hat environments.",
  },
  {
    title: "RESEARCH INTERNSHIP",
    img: IMAGES[2],
    text: "We provide students real industry project opportunities on DevOps, Cloud, IoT, and more—making them truly industry ready.",
  },
]

const Culture = () => {
  return (
    <div className="w-full py-16 bg-blue-900">
      {/* Diagonal Border */}
      <div className="relative h-10 mb-12">
        <div className="absolute left-0 bottom-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 400 40" preserveAspectRatio="none">
            {/* Solid diagonal line from bottom-left to top-right */}
            <line 
              x1="0" y1="40" x2="400" y2="0" 
              stroke="rgba(255, 255, 255, 0.15)"  // very low opacity white
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      <h1 className="text-4xl font-extrabold text-center mb-16 text-blue-300">
        Our Culture
      </h1>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch px-6 md:px-0 max-w-7xl mx-auto">
        {CARDS.map(({title, img, text}) => (
          <div 
            key={title}
            className="flex-1 bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center transition-transform duration-300 hover:-translate-y-3"
          >
            {/* Card Image with hover scale & fade */}
            <div className="mb-6 w-28 h-28 flex items-center justify-center">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-contain rounded-lg transition-all duration-300 hover:scale-110 hover:opacity-80"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">{title}</h3>
            <p className="text-gray-800 text-center">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Culture
