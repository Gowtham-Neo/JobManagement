import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import cyber from "../../assets/image.png";
import Slider from "@mui/material/Slider";
const Navbar = ({ onCreateJobClick, onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState([50, 80]);
  const salary = [0, 300];
  useEffect(() => {
    onFilterChange("salary", salary);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onFilterChange("search", value);
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    onFilterChange("location", value);
  };

  const handleJobTypeChange = (e) => {
    const value = e.target.value;
    setJobType(value);
    onFilterChange("jobType", value);
  };

  const handleSalaryChange = (event, values) => {
    setSalaryRange(values);
    onFilterChange("salary", values);
  };

  return (
    <div className="w-full flex flex-col items-center p-4 bg-white shadow-xl">
      {/* Top Nav */}
      <div className="w-full max-w-7xl py-2">
        <div className="hidden md:flex space-x-8 text-gray-700 text-sm font-medium justify-center">
          <div className="border-2 md:flex space-x-8 items-center px-4 py-4 rounded-full shadow-lg border-amber-50">
            <img src={cyber} alt="Logo" className="w-10 h-10" />

            {[
              "Home",
              "Find Jobs",
              "Find Talents",
              "About us",
              "Testimonials",
            ].map((label, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-purple-600 hover:scale-110 hover:shadow-lg rounded-b-md px-4 py-2 transition duration-150 ease-in-out"
              >
                {label}
              </a>
            ))}

            <button
              onClick={onCreateJobClick}
              className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Create Jobs
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-gray-300 px-6 py-3 bg-white w-full mt-2">
        <div className="flex items-center w-full md:w-auto gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.65 11.65a5 5 0 11-10 0 5 5 0 0110 0z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search By Job Title, Role"
            className="outline-none border-none bg-transparent text-md text-gray-600 placeholder-gray-400 w-full md:w-60 font-sans"
          />
        </div>

        <div className="hidden md:block h-6 w-px bg-gray-200"></div>

        <div className="flex items-center cursor-pointer w-full md:w-auto gap-2">
          <IoLocationOutline className="text-gray-400 text-lg" />
          <select
            name="location"
            value={location}
            onChange={handleLocationChange}
            className="text-md text-gray-600 outline-none"
          >
            <option value="">Preferred Location</option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

=        <div className="hidden md:block h-6 w-px bg-gray-200"></div>

        <div className="flex items-center cursor-pointer w-full md:w-auto gap-4">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 17C13 14.7909 10.3137 13 7 13C3.68629 13 1 14.7909 1 17M14.8281 3.17188C15.1996 3.54331 15.4942 3.98427 15.6952 4.46957C15.8962 4.95487 15.9999 5.47533 15.9999 6.00062C15.9999 6.52591 15.8963 7.04497 15.6953 7.53027C15.4943 8.01558 15.1996 8.45705 14.8281 8.82848M17 1C17.6566 1.65661 18.1775 2.43612 18.5328 3.29402C18.8882 4.15192 19.0718 5.07127 19.0718 5.99985C19.0718 6.92844 18.8886 7.84815 18.5332 8.70605C18.1778 9.56396 17.6566 10.3435 17 11.0001M7 10C4.79086 10 3 8.20914 3 6C3 3.79086 4.79086 2 7 2C9.20914 2 11 3.79086 11 6C11 8.20914 9.20914 10 7 10Z"
              stroke="#686868"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <select
            name="jobType"
            value={jobType}
            onChange={handleJobTypeChange}
            className="text-md text-gray-600 outline-none"
          >
            <option value="">Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div className="hidden md:block h-6 w-px bg-gray-200"></div>

        <div className="flex flex-col md:flex-col justify-around items-center md:items-start gap-2 md:gap-2">
          <div className="flex flex-row md:flex:row justify-around items-center md:items-start gap-8 md:gap-8">
            <span className="text-md text-gray-600 whitespace-nowrap">
              Salary Per Month
            </span>
            <span className="text-md text-gray-600 whitespace-nowrap">
              ₹{salaryRange[0]}k - ₹{salaryRange[1]}k
            </span>
          </div>
          <div className="flex items-center gap-2 w-full md:w-55">
            <Slider
              getAriaLabel={() => "Salary Range"}
              value={salaryRange}
              onChange={(event, values) => setSalaryRange(values)} // Just update UI immediately
              onChangeCommitted={(event, values) =>
                onFilterChange("salary", values)
              } // Only send after finishing interaction
              valueLabelDisplay="auto"
              min={50}
              max={80}
              sx={{
                color: "black",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
