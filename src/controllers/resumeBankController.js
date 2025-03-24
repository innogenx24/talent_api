import db from "../models/index.js";
import { Op } from "sequelize";

const ResumeBank = db.ResumeBank;

export const createResumeEntry = async (req, res) => {
  try {
    const {
      candidate_id,
      first_name,
      last_name,
      email,
      phone_number,
      address,
      other_information,
      work_experience,
      skills,
      job_title,
      professional_information,
      portfolio_social_links,
      notes,
    } = req.body;

    // Check if resume entry already exists
    const existingResume = await ResumeBank.findOne({ where: { email } });

    if (existingResume) {
      return res.status(400).json({ message: "Resume with this email already exists." });
    }

    // Create new resume entry
    const resumeEntry = await ResumeBank.create({
      candidate_id,
      first_name,
      last_name,
      email,
      phone_number,
      address: address ? JSON.parse(address) : null, // Ensure JSON data is parsed
      source: other_information ? JSON.parse(other_information).source : null,
      status: other_information ? JSON.parse(other_information).status : null,
      work_experience: work_experience ? JSON.parse(work_experience) : null,
      technical_skills: skills ? JSON.parse(skills).technical_skills : [],
      job_title,
      total_experience: professional_information ? JSON.parse(professional_information).total_years_experience : null,
      portfolio_link: portfolio_social_links ? JSON.parse(portfolio_social_links).portfolio_link : null,
      linkedin_link: portfolio_social_links ? JSON.parse(portfolio_social_links).linkedin_link : null,
      resume_file: req.file ? req.file.filename : null,
      notes,
    });

    res.status(201).json({ message: "Resume entry created successfully", resumeEntry });
  } catch (error) {
    console.error("Error creating resume entry:", error);
    res.status(500).json({ message: "Error creating resume entry", error: error.message });
  }
};


// Get all resume entries
export const getAllResumes = async (req, res) => {
  try {
    const resumes = await ResumeBank.findAll();
    res.status(200).json(resumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching resumes", error });
  }
};

// Get resume entry by ID
export const getResumeById = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await ResumeBank.findByPk(id);

    if (!resume) return res.status(404).json({ message: "Resume entry not found" });

    res.status(200).json(resume);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching resume entry", error });
  }
};

// Update resume entry
export const updateResumeEntry = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        first_name,
        last_name,
        email,
        phone_number,
        address,
        other_information,
        work_experience,
        skills,
        job_title,
        professional_information,
        portfolio_social_links,
        resume_file,
        notes,
      } = req.body;
  
      const resumeEntry = await ResumeBank.findByPk(id);
      if (!resumeEntry) return res.status(404).json({ message: "Resume entry not found" });
  
      // Check if email already exists (excluding the current entry)
      const existingResume = await ResumeBank.findOne({
        where: {
          email,
          id: { [Op.ne]: id }, // ✅ Corrected
        },
      });
  
      if (existingResume) {
        return res.status(400).json({ message: "Resume entry with this email already exists." });
      }
  
      // Update resume entry details
      await resumeEntry.update({
        first_name,
        last_name,
        email,
        phone_number,
        address: address || resumeEntry.address, // No JSON.parse needed
        source: other_information?.source || resumeEntry.source,
        status: other_information?.status || resumeEntry.status,
        work_experience: work_experience || resumeEntry.work_experience, // No JSON.parse needed
        technical_skills: skills?.technical_skills || resumeEntry.technical_skills,
        job_title,
        total_experience: professional_information?.total_years_experience || resumeEntry.total_experience,
        portfolio_link: portfolio_social_links?.portfolio_link || resumeEntry.portfolio_link,
        linkedin_link: portfolio_social_links?.linkedin_link || resumeEntry.linkedin_link,
        resume_file,
        notes,
      });
  
      res.status(200).json({ message: "Resume entry updated successfully", resumeEntry });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating resume entry", error });
    }
};

// Delete resume entry
export const deleteResumeEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const resumeEntry = await ResumeBank.findByPk(id);

    if (!resumeEntry) return res.status(404).json({ message: "Resume entry not found" });

    await resumeEntry.destroy();
    res.status(200).json({ message: "Resume entry deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting resume entry", error });
  }
};
