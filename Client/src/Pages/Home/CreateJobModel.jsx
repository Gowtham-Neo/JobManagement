import React, { useState } from "react";
import axios from "axios";

const CreateJobModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "FullTime",
    salaryMin: 0,
    salaryMax: 0,
    deadline: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/jobs", formData);
      alert("Job created!");
      onClose();
      const data=await res.data
      console.log(res);
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/80">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-8 text-center">
          Create Job Opening
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Job Title</label>
              <input
                name="jobTitle"
                type="text"
                placeholder="Full Stack Developer"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-1 focus:ring-black focus:outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium">Company Name</label>
              <input
                name="companyName"
                type="text"
                placeholder="Amazon, Microsoft, Swiggy"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-1 focus:ring-black focus:outline-none"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-1 focus:ring-black focus:outline-none"
              >
                <option value="">Choose Preferred Location</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium">Job Type</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-1 focus:ring-black focus:outline-none"
              >
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Salary Range</label>
              <div className="flex space-x-2 mt-1">
                <input
                  name="salaryMin"
                  type="number"
                  placeholder="₹0"
                  value={formData.salaryMin}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 border rounded-md focus:ring-1 focus:ring-black focus:outline-none"
                />
                <input
                  name="salaryMax"
                  type="number"
                  placeholder="₹12,00,000"
                  value={formData.salaryMax}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 border rounded-md focus:ring-1 focus:ring-black focus:outline-none"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium">
                Application Deadline
              </label>
              <input
                name="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-1 focus:ring-black focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Job Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Please share a description to let the candidate know more about the job role"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-1 focus:ring-black focus:outline-none resize-none"
            ></textarea>
          </div>

          <div className="flex justify-between mt-6">
            <div
              className="flex flex-row items-center border-2 border-black px-8 py-2 rounded-md hover:bg-gray-100 justify-around cursor-pointer"
              onClick={onClose}
            >
              <button type="button" className="pr-2">
                Save Draft
              </button>
              <svg
                width="10"
                height="13"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 7.5L5 11.5L1 7.5M9 1.5L5 5.5L1 1.5"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-700"
            >
              Publish &raquo;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobModal;
