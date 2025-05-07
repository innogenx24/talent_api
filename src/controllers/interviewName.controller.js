import db from "../models/index.js";
const InterviewName = db.InterviewName;

// Create a new interview entry
export const createInterviewName = async (req, res) => {
    try {
        const { interview_name, description, is_active } = req.body;

        if (!interview_name) {
            return res.status(400).json({ message: "Interview Name is required." });
        }

        const newInterview = await InterviewName.create({
            interview_name,
            description,
            is_active
        });

        res.status(201).json(newInterview);
    } catch (error) {
        res.status(500).json({ message: "Error creating interview name", error: error.message });
    }
};

// Get all interviews
export const getAllInterviewNames = async (req, res) => {
    try {
        const interviews = await InterviewName.findAll();
        res.status(200).json(interviews);
    } catch (error) {
        res.status(500).json({ message: "Error fetching interview names", error: error.message });
    }
};

// Get single interview by ID
export const getInterviewNameById = async (req, res) => {
    try {
        const { id } = req.params;
        const interview = await InterviewName.findByPk(id);

        if (!interview) {
            return res.status(404).json({ message: "Interview name not found" });
        }

        res.status(200).json(interview);
    } catch (error) {
        res.status(500).json({ message: "Error fetching interview name", error: error.message });
    }
};

// Update interview by ID
export const updateInterviewName = async (req, res) => {
    try {
        const { id } = req.params;
        const { interview_name, description, is_active } = req.body;

        const interview = await InterviewName.findByPk(id);
        if (!interview) {
            return res.status(404).json({ message: "Interview name not found" });
        }

        interview.interview_name = interview_name ?? interview.interview_name;
        interview.description = description ?? interview.description;
        interview.is_active = is_active ?? interview.is_active;

        await interview.save();

        res.status(200).json(interview);
    } catch (error) {
        res.status(500).json({ message: "Error updating interview name", error: error.message });
    }
};

// Delete interview by ID
export const deleteInterviewName = async (req, res) => {
    try {
        const { id } = req.params;
        const interview = await InterviewName.findByPk(id);

        if (!interview) {
            return res.status(404).json({ message: "Interview name not found" });
        }

        await interview.destroy();

        res.status(200).json({ message: "Interview name deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting interview name", error: error.message });
    }
};
