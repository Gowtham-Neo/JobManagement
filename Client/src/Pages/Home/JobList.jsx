import React, { useEffect, useState } from "react";
import axios from "axios";
import amazon from "../../assets/amazon.webp";
import cmw from "../../assets/cmwlogo.webp";
import EY from "../../assets/EY.webp";
import Google from "../../assets/Google.webp";
import cts from "../../assets/Logo_Cognizant.webp";
import microsoft from "../../assets/microsoft_PNG13.webp";
import swiggy from "../../assets/swiggy.webp";
import tcs from "../../assets/tcs.webp";
import tesla from "../../assets/Tesla.webp";
import DefaultLogo from "../../assets/default.jpeg";
const JobCard = ({ job }) => {
  const companyLogos = {
    Google: Google,
    Microsoft: microsoft,
    Amazon: amazon,
    EY: EY,
    Cognizant: cts,
    TCS: tcs,
    Swiggy: swiggy,
    Tesla: tesla,
    Cybermindworks: cmw,
  };

  const timeAgo = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffInHours = Math.floor((now - createdDate) / (1000 * 60 * 60));
    if (diffInHours < 24) return `${diffInHours}h Ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d Ago`;
  };

  const getCompanyLogo = (job) => {
    const logoFromMap = companyLogos[job.companyName];
    if (logoFromMap) {
      return logoFromMap;
    }

    return DefaultLogo;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-[315px] relative flex flex-col justify-between transition-all hover:scale-105 duration-300">
      <div className="flex justify-between">
        <div className="border rounded-lg px-4 py-4  border-amber-50 shadow-inner inset-shadow-sm">
          <img
            src={getCompanyLogo(job)}
            alt={job.companyName}
            className="w-16 h-16 object-contain rounded-lg"
          />
        </div>
        <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
          {timeAgo(job.createdAt)}
        </div>
      </div>

      <h2 className="text-lg font-semibold mt-4">{job.jobTitle}</h2>

      <div className="flex items-center text-gray-500 text-sm mt-3 space-x-4">
        <div className="flex items-center space-x-1">
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7 14.75C11.7 12.7618 9.28233 11.15 6.29999 11.15C3.31766 11.15 0.899994 12.7618 0.899994 14.75M15.3 12.05V9.35M15.3 9.35V6.65M15.3 9.35H12.6M15.3 9.35H18M6.29999 8.45C4.31177 8.45 2.69999 6.83822 2.69999 4.85C2.69999 2.86177 4.31177 1.25 6.29999 1.25C8.28822 1.25 9.89999 2.86177 9.89999 4.85C9.89999 6.83822 8.28822 8.45 6.29999 8.45Z"
              stroke="#5A5A5A"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>1-3 yr Exp</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.76364 16.3408H3.49091M3.49091 16.3408H12.1273M3.49091 16.3408V4.42274C3.49091 3.45538 3.49091 2.97133 3.67918 2.60185C3.84478 2.27684 4.10882 2.0128 4.43383 1.8472C4.80331 1.65894 5.28736 1.65894 6.25472 1.65894H9.36381C10.3312 1.65894 10.8142 1.65894 11.1837 1.8472C11.5087 2.0128 11.7736 2.27684 11.9392 2.60185C12.1273 2.97097 12.1273 3.45443 12.1273 4.4199V9.43166M12.1273 16.3408H17.3091M12.1273 16.3408V9.43166M17.3091 16.3408H19.0364M17.3091 16.3408V9.43166C17.3091 8.62686 17.309 8.22465 17.1775 7.90723C17.0022 7.484 16.6663 7.14754 16.243 6.97223C15.9256 6.84075 15.5228 6.84075 14.718 6.84075C13.9132 6.84075 13.5108 6.84075 13.1933 6.97223C12.7701 7.14754 12.4341 7.484 12.2588 7.90723C12.1273 8.22465 12.1273 8.62685 12.1273 9.43166M6.08182 7.70439H9.53637M6.08182 5.11348H9.53637"
              stroke="#5A5A5A"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{job.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1728 10.0001L9.99096 15.4546L1.80914 10.0001M18.1728 13.6365L9.99096 19.091L1.80914 13.6365M18.1728 6.36373L9.99096 11.8183L1.80914 6.36373L9.99096 0.90918L18.1728 6.36373Z"
              stroke="#5A5A5A"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{job.salaryMax / 100000}LPA</span>
        </div>
      </div>

      <ul className="text-gray-600 text-sm mt-4 space-y-2 list-disc list-inside">
        {job.description
          .split(". ")
          .slice(0, 2)
          .map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
      </ul>

      <button className="mt-6 bg-blue-400 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition-all">
        Apply Now
      </button>
    </div>
  );
};

const JobList = ({ jobs }) => {
  if (jobs.length === 0) {
    return <p className="text-center text-gray-500">No jobs found!</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
