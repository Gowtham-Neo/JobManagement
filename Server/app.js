const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Job } = require("./models");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/jobs", async (req, res) => {
  try {
    const {
      jobTitle,
      companyName,
      location,
      jobType,
      salaryMin,
      salaryMax,
      deadline,
      description,
    } = req.body;

    const newJob = await Job.create({
      jobTitle,
      companyName,
      location,
      jobType,
      salaryMin,
      salaryMax,
      deadline,
      description,
    });

    res.status(201).json(newJob);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
