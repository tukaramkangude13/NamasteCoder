// src/Courses.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: "Foundation CLA / RHCSA",
    url: "https://unnatidevelopment.in/courses_portfolio/rhcsa-rhel9/?portfolioCats=31",
    img: "https://unnatidevelopment.in/wp-content/uploads/2023/03/Linux-Foundation.png",
  },
  {
    title: "KuCL 2.3",
    url: "https://unnatidevelopment.in/courses_portfolio/kucl/?portfolioCats=27",
    img: "https://unnatidevelopment.in/wp-content/uploads/2021/03/KuCL-2.3-logo.png",
  },
  {
    title: "Certified Kubernetes Security Specialist",
    url: "https://unnatidevelopment.in/courses_portfolio/cks/?portfolioCats=25",
    img: "https://unnatidevelopment.in/wp-content/uploads/2024/06/CKS-for-Website.png",
  },
  {
    title: "CCA + CKA",
    url: "https://unnatidevelopment.in/courses_portfolio/cca-cka/?portfolioCats=25",
    img: "https://unnatidevelopment.in/wp-content/uploads/2023/03/Container.png",
  },
  {
    title: "DevOps-Cloud Infrastructure Automation using Terraform",
    url: "https://unnatidevelopment.in/courses_portfolio/devops-cloud-infrastructure-using-terraform/?portfolioCats=37",
    img: "https://unnatidevelopment.in/wp-content/uploads/2023/11/DevOps-Cloud-Infrastructure-Automation-using-Terraform.png",
  },
  {
    title: "Configuration Management With Ansible + Terraform",
    url: "https://unnatidevelopment.in/courses_portfolio/configuration-management-with-ansible-terraform/?portfolioCats=37",
    img: "https://unnatidevelopment.in/wp-content/uploads/2023/03/CMT.png",
  },
  {
    title: "MLOps",
    url: "https://unnatidevelopment.in/courses_portfolio/mlops/?portfolioCats=39",
    img: "https://unnatidevelopment.in/wp-content/uploads/2024/07/MLOps-use-cases.png",
  },
  {
    title: "Multi Cloud Adminstrator",
    url: "https://unnatidevelopment.in/courses_portfolio/multi_cloud_adminstrator/?portfolioCats=33",
    img: "https://unnatidevelopment.in/wp-content/uploads/2024/07/Multi-Cloud.jpg",
  },
];

const offices = [
  {
    title: "Head Office",
    address: `"Shiv-Sawali", 2nd Floor, N-7, CIDCO R-28 Plot No.60, Opp.Baliram Patil High School, Aurangabad.`,
    phone: "9822451920",
    altPhone: "0240-2485766",
    time: "Monday - Friday: 9:00 AM - 9:00 PM",
  },
  {
    title: "Branch Office",
    address: `“Shiv-Sawali”, Plot No.13, GUT No.70, Near Alpine Hospital, Atharv Daily Needs, Chh.Shambhajinagar (MS) 431001.`,
    phone: "9970727708",
    altPhone: "0240-2985766",
    time: "Monday – Saturday: 9:00 AM – 9:00 PM",
  },
  {
    title: "Pune Office",
    address: `2nd Floor Office No.222-223 Survey No. 153/1A Off-Service Road, Mumbai Expressway, behind TipTop Intl Hotel, Wakad.`,
    phone: "9561191113",
    time: "Monday – Saturday: 9:00 AM – 9:00 PM",
  },
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">Courses</h1>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {courses.map((course, idx) => (
          <a
            key={idx}
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 text-center"
          >
            <img src={course.img} alt={course.title} className="w-full h-40 object-contain mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">{course.title}</h2>
          </a>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Our Offices</h2>

 
    </div>
  );
};

export default Courses;
