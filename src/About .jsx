import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const stats = [
  { value: "50", label: "Certified Students" },
  { value: "45", label: "Placed Students" },
  { value: "5",  label: "Corporate Trainers" },
  { value: "1",  label: "City Presence" },
  { value: "6",  label: "Corporate Trainings" },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      {/* About Us */}
      <section>
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">
          About Namaste Coder
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          <span className="font-semibold">Namaste Coder</span> is a modern IT training institute
          focused on practical, industry-ready skills. We specialize in{" "}
          <strong>
            Linux, DevOps, Cloud, Docker, Kubernetes, AWS, and Python
          </strong>
          . Our programs are hands-on, mentor-led, and aligned with real project
          workflows to help learners build careers confidently.
        </p>
      </section>

      {/* Why We're Specialists */}
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Why We’re Specialists
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
          <li className="bg-white shadow-sm rounded-xl p-4">
            🎯 Job-focused curriculum mapped to real roles
          </li>
          <li className="bg-white shadow-sm rounded-xl p-4">
            🧑‍🏫 Mentor support & doubt-solving
          </li>
          <li className="bg-white shadow-sm rounded-xl p-4">
            🧪 Labs, assignments & capstone projects
          </li>
          <li className="bg-white shadow-sm rounded-xl p-4">
            🧰 Git, CI/CD, containers & cloud tooling
          </li>
          <li className="bg-white shadow-sm rounded-xl p-4">
            🧾 Interview prep & placement assistance
          </li>
          <li className="bg-white shadow-sm rounded-xl p-4">
            📈 Progress tracking & feedback
          </li>
        </ul>
      </section>

      {/* Facilities */}
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Facilities We Provide
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We operate from our Pune center with a well-equipped lab setup, reliable
          power backup, and guided practice sessions. Students get access to course
          material, recorded sessions (if applicable), and dedicated mentoring hours.
        </p>

        {/* Quick office card (clickable map/phone) */}
        <div className="mt-6 bg-gray-50 rounded-xl p-6 shadow-sm max-w-2xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Pune Office</h3>
          <p className="flex items-start gap-3 mb-3">
            <FaMapMarkerAlt className="mt-1 text-blue-600 shrink-0" />
            <a
              href="https://www.google.com/maps?q=CRVX+HMM,+Indrayani+nagar,+Shani+Nagar,+Ambegaon+Budruk,+Pune,+Maharashtra+411046"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              CRVX+HMM, Indrayani Nagar, Shani Nagar, Ambegaon Budruk, Pune, Maharashtra 411046
            </a>
          </p>
          <p className="flex items-center gap-3">
            <FaPhone className="text-blue-600 shrink-0" />
            <a href="tel:7620068689" className="hover:underline">
              7620068689
            </a>
          </p>
        </div>
      </section>

      {/* What We Teach */}
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-6">What We Teach</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {["Linux", "Shell Scripting", "Git/GitHub", "Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Python", "DevOps"].map((t) => (
            <span
              key={t}
              className="text-sm bg-white border rounded-full px-4 py-2 text-gray-700 text-center"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Achievements / Stats */}
      <section className="bg-blue-700 text-white py-12 rounded-xl shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-bold">{s.value}</p>
              <p className="opacity-90">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-blue-700">
          We Are Ready To Build Your Career
        </h2>
        <p className="text-xl text-gray-700 mt-2">ARE YOU?</p>
        <a
          href="/courses"
          className="inline-block mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-800 transition"
        >
          Find a Course
        </a>
      </section>
    </div>
  );
};

export default About;
