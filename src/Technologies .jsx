import React from 'react'

const technologies = [
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", img: "https://tse4.mm.bing.net/th/id/OIP.psHTljeUmjcPjpOqtgp0HwHaEb?pid=Api&P=0&h=180" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
]

const scrollDuration = 30000; // 20 seconds per full scroll
const pauseDuration = 1000;   // 1 second pause at start

const Technologies = () => {
  return (
    <div className="overflow-hidden bg-gray-100 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Technologies We Teach</h2>
      <div className="relative w-full">
        <div 
          className="flex items-center space-x-16 animate-marquee"
          style={{
            animationDuration: `${scrollDuration}ms`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationFillMode: 'forwards',
            animationDirection: 'normal',
            animationDelay: `${pauseDuration}ms`,
          }}
        >
          {/* Repeat logos twice for seamless looping */}
          {[...technologies, ...technologies].map(({name, img}, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[120px] select-none">
              <img src={img} alt={name} className="w-20 h-20 object-contain mb-2" />
              <span className="text-gray-700 font-medium text-base">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation-name: marquee;
        }
      `}</style>
    </div>
  )
}

export default Technologies
