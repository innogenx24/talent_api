import db from "../models/index.js";

const InterviewStatus = db.InterviewStatus;

// Create a new interview status
export const createInterviewStatus = async (req, res) => {
  try {
    const { status_name, job_description, control, active_status } = req.body;

    // Validate required fields
    if (!status_name || !job_description) {
      return res.status(400).json({ message: "Status name and job description are required." });
    }

    const newInterviewStatus = await InterviewStatus.create({
      status_name,
      job_description,
      control,
      active_status,
    });

    res.status(201).json(newInterviewStatus);
  } catch (error) {
    console.error("Error creating interview status:", error); // Log the error
    res.status(500).json({ message: error.message });
  }
};

// Get all interview statuses
export const getAllInterviewStatuses = async (req, res) => {
  try {
    const interviewStatuses = await InterviewStatus.findAll();
    res.status(200).json(interviewStatuses);
  } catch (error) {
    console.error("Error fetching interview statuses:", error); // Log the error
    res.status(500).json({ message: error.message });
  }
};

// Get an interview status by ID
export const getInterviewStatusById = async (req, res) => {
  try {
    const interviewStatus = await InterviewStatus.findByPk(req.params.id);
    if (!interviewStatus) {
      return res.status(404).json({ message: "Interview status not found" });
    }
    res.status(200).json(interviewStatus);
  } catch (error) {
    console.error("Error fetching interview status:", error); // Log the error
    res.status(500).json({ message: error.message });
  }
};

// Update an interview status
export const updateInterviewStatus = async (req, res) => {
  try {
    const { status_name, job_description, control, active_status } = req.body;
    const interviewStatus = await InterviewStatus.findByPk(req.params.id);

    if (!interviewStatus) {
      return res.status(404).json({ message: "Interview status not found" });
    }

    // Validate required fields
    if (!status_name || !job_description) {
      return res.status(400).json({ message: "Status name and job description are required." });
    }

    await interviewStatus.update({
      status_name,
      job_description,
      control,
      active_status,
    });

    res.status(200).json(interviewStatus);
  } catch (error) {
    console.error("Error updating interview status:", error); // Log the error
    res.status(500).json({ message: error.message });
  }
};

// Delete an interview status
export const deleteInterviewStatus = async (req, res) => {
  try {
    const interviewStatus = await InterviewStatus.findByPk(req.params.id);
    if (!interviewStatus) {
      return res.status(404).json({ message: "Interview status not found" });
    }

    await interviewStatus.destroy();
    res.status(200).json({ message: "Interview status deleted" });
  } catch (error) {
    console.error("Error deleting interview status:", error); // Log the error
    res.status(500).json({ message: error.message });
  }
};
