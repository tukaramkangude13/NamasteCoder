import React, { useEffect, useState, useRef } from 'react';

const stats = [
  { label: 'Certified Students', value: 50 },
  { label: 'Placed Students', value: 45 },
  { label: 'Corporate Trainers', value: 5 },
  { label: 'City Presence', value: 1 },
  { label: 'Corporate Training', value: 6 },
];

const History = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef(null);
  const hasCounted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted.current) {
          hasCounted.current = true;
          stats.forEach(({ value }, idx) => {
            let start = 0;
            const duration = 2000;
            const increment = value / (duration / 30);
            const timer = setInterval(() => {
              start += increment;
              if (start >= value) {
                start = value;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[idx] = Math.floor(start);
                return newCounts;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="max-w-6xl mx-auto my-20 px-6 text-center">
      <h2 className="text-4xl font-extrabold text-green-800 mb-12">History</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
        {stats.map(({ label }, idx) => (
          <div key={label} className="flex flex-col items-center">
            <span className="text-5xl font-bold text-green-600">
              {counts[idx].toLocaleString()}
            </span>
            <p className="mt-2 text-lg font-medium text-gray-700">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
