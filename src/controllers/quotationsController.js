import db from "../models/index.js";
import { Op } from "sequelize";

const Quotation = db.Quotation;


export const createQuotation = async (req, res) => {
  try {
    const {
      quotation_id,
      quotation_date,
      company_id,
      project_type,
      procurement_start_date,
      procurement_end_date,
      description,
      client_company,
      client_name,
      phone_number,
      email,
      job_details, // JSON array
    } = req.body;

    // Create the main quotation entry with job details as JSON
    const quotation = await Quotation.create({
      quotation_id,
      quotation_date,
      company_id,
      project_type,
      procurement_start_date,
      procurement_end_date,
      description,
      client_company,
      client_name,
      phone_number,
      email,
      job_details, // Store job details inside the JSON column
    });

    res.status(201).json({ message: "Quotation created successfully", quotation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating quotation", error });
  }
};


// Get all quotations
export const getAllQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.findAll();
    res.status(200).json(quotations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching quotations", error });
  }
};

// Get quotation by ID
export const getQuotationById = async (req, res) => {
  try {
    const { id } = req.params;
    const quotation = await Quotation.findByPk(id);

    if (!quotation) return res.status(404).json({ message: "Quotation not found" });

    res.status(200).json(quotation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching quotation", error });
  }
};

// Update quotation
export const updateQuotation = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      quotation_id,
      quotation_date,
      company_id,
      project_type,
      procurement_start_date,
      procurement_end_date,
      description,
      client_company,
      client_name,
      phone_number,
      email,
      job_title,
      experience_range,
      skill_set,
      cost,
      quantity,
    } = req.body;

    const quotation = await Quotation.findByPk(id);
    if (!quotation) return res.status(404).json({ message: "Quotation not found" });

    // Check if another quotation has the same quotation_id
    const existingQuotation = await Quotation.findOne({
      where: {
        quotation_id,
        id: { [Op.ne]: id }, // Exclude current record
      },
    });

    if (existingQuotation) {
      return res.status(400).json({ message: "Quotation ID already exists. Please use a different ID." });
    }

    // Update quotation
    await quotation.update({
      quotation_id,
      quotation_date,
      company_id,
      project_type,
      procurement_start_date,
      procurement_end_date,
      description,
      client_company,
      client_name,
      phone_number,
      email,
      job_title,
      experience_range,
      skill_set,
      cost,
      quantity,
      updated_at: new Date(),
    });

    res.status(200).json({ message: "Quotation updated successfully", quotation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating quotation", error });
  }
};

// Delete quotation
export const deleteQuotation = async (req, res) => {
  try {
    const { id } = req.params;
    const quotation = await Quotation.findByPk(id);

    if (!quotation) return res.status(404).json({ message: "Quotation not found" });

    await quotation.destroy();

    res.status(200).json({ message: "Quotation deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting quotation", error });
  }
};
