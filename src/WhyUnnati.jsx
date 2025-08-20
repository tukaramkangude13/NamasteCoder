import React from 'react'

const reasons = [
  {
    img: 'https://itpreneurpune.com/wp-content/uploads/2024/09/Job-training.png',
    text: '100% Job Assurance with Money-Back Policy',
  },
  {
    img: 'https://itpreneurpune.com/wp-content/uploads/2024/09/Job-training.png',
    text: 'Job-centric training for enhanced career prospects and advancement opportunities.',
  },
  {
    img: 'https://itpreneurpune.com/wp-content/uploads/2024/09/Offer-LatterICN.png',
    text: 'Land The Job. Day One Offer Letter Guaranteed',
  },
  {
    img: 'https://itpreneurpune.com/wp-content/uploads/2024/09/Lecture.png',
    text: 'Lecture content crafted by industry experts and simplified for clarity.',
  },
  {
    img: 'https://itpreneurpune.com/wp-content/uploads/2024/09/collaboration-1-ICN.png',
    text: 'Collaboration with 300+ companies (MNCs, MLCs, fintech, etc.) For Placements.',
  },
  {
    img: 'https://itpreneurpune.com/wp-content/uploads/2024/09/certificate-1-ICN.png',
    text: 'Certification from NSDC, AICTSD, and AICTE.',
  },
]

const WhyUnnati = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 bg-gray-50 min-h-screen">
      {/* WHY UNNATI Section */}
      <h1 className="text-4xl font-extrabold text-center mb-16 text-green-800">
        Why Namaste Coder?
      </h1>

      {/* Reason Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {reasons.map(({ img, text }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center max-w-xs p-6 rounded-2xl shadow-lg bg-gradient-to-t from-green-700 to-green-500 relative group overflow-hidden"
          >
            {/* Border highlight effect */}
            <div className="absolute bottom-0 left-0 w-full h-0 bg-green-400 transition-all duration-500 group-hover:h-full opacity-20"></div>

            <img
              src={img}
              alt={text}
              className="w-20 h-20 object-contain mb-5 transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <p className="text-center text-white text-base relative z-10">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Director's Desk Section */}
      <h1 className="text-4xl font-extrabold text-center mt-32 mb-12 text-green-800">
        Director’s Desk
      </h1>
      <div className="flex flex-col lg:flex-row gap-16 items-center max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        {/* Award Image and Description */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <img
            src="https://unnatidevelopment.in/wp-content/uploads/2019/12/RHCI_AWARD-400x267.jpg"
            alt="Best Red Hat Certified Instructor Award"
            className="rounded-lg shadow-md mb-4"
          />
          <p className="text-green-700 font-semibold mb-2">
            Corporate and International Trainer
          </p>
          <h2 className="text-gray-800 font-medium leading-relaxed text-sm md:text-base">
            Best Red Hat Certified Instructor two times in a row. Delivered training in
            Australia, Singapore, Indonesia, Hong Kong, and India.
          </h2>
        </div>

        {/* Profile Image and Info */}
        <div className="flex items-center gap-8">
          <img
            src="https://unnatidevelopment.in/wp-content/uploads/2019/12/Ashutosh_S_Bhakare.png"
            alt="Ashutosh S. Bhakare"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div className="max-w-md text-gray-700 space-y-4">
            <p className="text-xl font-semibold text-green-700">
              ASHUTOSH S. BHAKARE
            </p>
            <p>
              6+ Years of Experience in Training Domain, Director, Corporate
              Trainer on Linux, Cloud, JBOSS and DevOps (Google Authorized
              Trainer, SCI, RHCI, JBCI, RHCA-XI*, CK{`{A,D,S}`} SCA, RHCSA
              RHEL9)
            </p>
            <p>Fedora Active Contributor, Docker Community Leader</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUnnati
