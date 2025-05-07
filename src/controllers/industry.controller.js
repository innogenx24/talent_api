import db from "../models/index.js";
const Industry = db.Industry;

// Create a new industry
export const createIndustry = async (req, res) => {
  try {
    const { industry_name, description, is_active } = req.body;

    const industry = await Industry.create({
      industry_name,
      description,
      is_active
    });

    res.status(201).json(industry);
  } catch (error) {
    res.status(500).json({ message: "Error creating industry", error });
  }
};

// Get all industries
export const getAllIndustries = async (req, res) => {
  try {
    const industries = await Industry.findAll();
    res.json(industries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching industries", error });
  }
};

// Get industry by ID
export const getIndustryById = async (req, res) => {
  try {
    const industry = await Industry.findByPk(req.params.id);
    if (!industry) return res.status(404).json({ message: "Industry not found" });
    res.json(industry);
  } catch (error) {
    res.status(500).json({ message: "Error fetching industry", error });
  }
};

// Update industry
export const updateIndustry = async (req, res) => {
  try {
    const { industry_name, description, is_active } = req.body;
    const industry = await Industry.findByPk(req.params.id);

    if (!industry) return res.status(404).json({ message: "Industry not found" });

    await industry.update({ industry_name, description, is_active });
    res.json(industry);
  } catch (error) {
    res.status(500).json({ message: "Error updating industry", error });
  }
};

// Delete industry
export const deleteIndustry = async (req, res) => {
  try {
    const industry = await Industry.findByPk(req.params.id);
    if (!industry) return res.status(404).json({ message: "Industry not found" });

    await industry.destroy();
    res.json({ message: "Industry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting industry", error });
  }
};
