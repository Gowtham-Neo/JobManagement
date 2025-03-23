import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import JobList from "./JobList";
import CreateJobModal from "./CreateJobModel";
import axios from "axios";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [filters, setFilters] = useState({
    search: "",
    location: "",
    jobType: "",
    salary: 80,
  });

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs")
      .then((res) => {
        setJobs(res.data);
        setFilteredJobs(res.data);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
      });
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesSearch = job.jobTitle
        .toLowerCase()
        .includes(filters.search.toLowerCase());

      const matchesLocation = filters.location
        ? job.location.toLowerCase() === filters.location.toLowerCase()
        : true;

      const matchesJobType = filters.jobType
        ? job.jobType.toLowerCase().replace(/\s/g, "") ===
          filters.jobType.toLowerCase().replace(/\s/g, "")
        : true;

      console.log(filters.salary[0], filters.salary[1]);

      console.log("job",  job.salaryMin / 12 , job.salaryMax / 12);

      console.log(filters.salary[0] * 1000, filters.salary[1] * 1000);

      const matchesSalary =
        job.salaryMin / 12 >= filters.salary[0] * 1000 &&
        job.salaryMax / 12 <= filters.salary[1] * 1000;

      return (
        matchesSearch && matchesLocation && matchesJobType && matchesSalary
      );
    });
    console.log("filtered", filtered);
    setFilteredJobs(filtered);
  }, [filters, jobs]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const fetchJobs = async () => {
    axios
      .get("http://localhost:5000/jobs")
      .then((res) => {
        setJobs(res.data);
        setFilteredJobs(res.data);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        onCreateJobClick={handleOpenModal}
        onFilterChange={handleFilterChange}
      />
      <JobList jobs={filteredJobs} />
      <CreateJobModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onJobCreated={fetchJobs}
      />{" "}
    </div>
  );
}

export default Home;
