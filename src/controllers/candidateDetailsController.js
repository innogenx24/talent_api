import db from "../models/index.js";
import { Op } from "sequelize";

const CandidateDetails = db.CandidateDetails;

// Create a new candidate
export const createCandidate = async (req, res) => {
    try {
        const { candidate_id, first_name, last_name, profile_picture, resume_file, email, phone_number, address, education, work_experience, technical_skills, language_skills, candidate_status, portfolio_link, linkedin_link, years_of_experience, current_salary, expected_salary } = req.body;

        // Check if candidate ID or email already exists
        const existingCandidate = await CandidateDetails.findOne({
            where: { [Op.or]: [{ candidate_id }, { email }] },
        });

        if (existingCandidate) {
            return res.status(400).json({ message: "Candidate ID or Email already exists. Please use a different one." });
        }

        // Create candidate
        const candidate = await CandidateDetails.create({
            candidate_id,
            first_name,
            last_name,
            profile_picture,
            resume_file,
            email,
            phone_number,
            address,
            education,
            work_experience,
            technical_skills,
            language_skills,
            candidate_status,
            portfolio_link,
            linkedin_link,
            years_of_experience,
            current_salary,
            expected_salary,
            created_at: new Date(),
            updated_at: new Date(),
        });

        res.status(201).json({ message: "Candidate created successfully", candidate });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating candidate", error });
    }
};

// Get all candidates
export const getAllCandidates = async (req, res) => {
    try {
        const candidates = await CandidateDetails.findAll();
        res.status(200).json(candidates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching candidates", error });
    }
};

// Get candidate by ID
export const getCandidateById = async (req, res) => {
    try {
        const { id } = req.params;
        const candidate = await CandidateDetails.findByPk(id);

        if (!candidate) return res.status(404).json({ message: "Candidate not found" });

        res.status(200).json(candidate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching candidate", error });
    }
};

// Update candidate
export const updateCandidate = async (req, res) => {
    try {
        const { id } = req.params;
        const { candidate_id, first_name, last_name, profile_picture, resume_file, email, phone_number, address, education, work_experience, technical_skills, language_skills, candidate_status, portfolio_link, linkedin_link, years_of_experience, current_salary, expected_salary } = req.body;

        const candidate = await CandidateDetails.findByPk(id);
        if (!candidate) return res.status(404).json({ message: "Candidate not found" });

        // Check if another candidate has the same candidate ID or email
        const existingCandidate = await CandidateDetails.findOne({
            where: {
                [Op.or]: [{ candidate_id }, { email }],
                id: { [Op.ne]: id }, // Exclude current candidate
            },
        });

        if (existingCandidate) {
            return res.status(400).json({ message: "Candidate ID or Email already exists. Please use a different one." });
        }

        // Update candidate
        await candidate.update({
            candidate_id,
            first_name,
            last_name,
            profile_picture,
            resume_file,
            email,
            phone_number,
            address,
            education,
            work_experience,
            technical_skills,
            language_skills,
            candidate_status,
            portfolio_link,
            linkedin_link,
            years_of_experience,
            current_salary,
            expected_salary,
            updated_at: new Date(),
        });

        res.status(200).json({ message: "Candidate updated successfully", candidate });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating candidate", error });
    }
};

// Delete candidate
export const deleteCandidate = async (req, res) => {
    try {
        const { id } = req.params;
        const candidate = await CandidateDetails.findByPk(id);

        if (!candidate) return res.status(404).json({ message: "Candidate not found" });

        await candidate.destroy();

        res.status(200).json({ message: "Candidate deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting candidate", error });
    }
};
