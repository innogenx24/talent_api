// src/controllers/skillsAddController.js
import db from "../models/index.js";
const SkillsAdd = db.SkillsAdd;

// Create a new skill entry
export const createSkill = async (req, res) => {
  try {
    const { job_title, job_description, active_status, skills } = req.body;
    const newSkill = await SkillsAdd.create({
      job_title,
      job_description,
      active_status,
      skills,
    });
    res.status(201).json(newSkill);
  } catch (error) {
    console.error("Error creating skill entry:", error);
    res.status(500).json({ message: "Error creating skill entry", error });
  }
};

// Get all skills
export const getAllSkills = async (req, res) => {
  try {
    const skills = await SkillsAdd.findAll();
    res.status(200).json(skills);
  } catch (error) {
    console.error("Error fetching skills:", error);
    res.status(500).json({ message: "Error fetching skills", error });
  }
};

// Get a single skill entry by ID
export const getSkillById = async (req, res) => {
  try {
    const skill = await SkillsAdd.findByPk(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    res.status(200).json(skill);
  } catch (error) {
    console.error("Error fetching skill:", error);
    res.status(500).json({ message: "Error fetching skill", error });
  }
};

// Update a skill entry
export const updateSkill = async (req, res) => {
  try {
    const { job_title, job_description, active_status, skills } = req.body;
    const [updated] = await SkillsAdd.update(
      { job_title, job_description, active_status, skills },
      { where: { id: req.params.id } }
    );
    if (!updated) return res.status(404).json({ message: "Skill not found" });
    const updatedSkill = await SkillsAdd.findByPk(req.params.id);
    res.status(200).json(updatedSkill);
  } catch (error) {
    console.error("Error updating skill:", error);
    res.status(500).json({ message: "Error updating skill", error });
  }
};

// Delete a skill entry
export const deleteSkill = async (req, res) => {
  try {
    const deleted = await SkillsAdd.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Skill not found" });
    res.status(200).json({ message: "Skill deleted successfully" });
  } catch (error) {
    console.error("Error deleting skill:", error);
    res.status(500).json({ message: "Error deleting skill", error });
  }
};
