import db from "../models/index.js";
const RevenueModel = db.RevenueModel;

// Create a new revenue model
export const createRevenueModel = async (req, res) => {
  try {
    const { revenue_model_name, description, active_status } = req.body;

    // Validate input data
    if (!revenue_model_name) {
      return res.status(400).json({ message: "Revenue model name is required" });
    }

    // Create the revenue model entry in the database
    const revenueModel = await RevenueModel.create({
      revenue_model_name,
      description,
      active_status,
    });

    // Return the created revenue model
    res.status(201).json(revenueModel);
  } catch (error) {
    console.error("Error creating revenue model:", error); // Log error for debugging
    res.status(500).json({ message: "Error creating revenue model", error: error.message });
  }
};

// Get all revenue models
export const getAllRevenueModels = async (req, res) => {
  try {
    const revenueModels = await RevenueModel.findAll();
    res.status(200).json(revenueModels);
  } catch (error) {
    res.status(500).json({ message: "Error fetching revenue models", error });
  }
};

// Get a single revenue model by ID
export const getRevenueModelById = async (req, res) => {
  try {
    const revenueModel = await RevenueModel.findByPk(req.params.id);
    if (!revenueModel) return res.status(404).json({ message: "Revenue model not found" });
    res.status(200).json(revenueModel);
  } catch (error) {
    res.status(500).json({ message: "Error fetching revenue model", error });
  }
};

// Update revenue model
export const updateRevenueModel = async (req, res) => {
  try {
    const { revenue_model_name, description, active_status } = req.body;
    const [updated] = await RevenueModel.update(
      { revenue_model_name, description, active_status },
      { where: { id: req.params.id } }
    );
    if (!updated) return res.status(404).json({ message: "Revenue model not found" });
    const updatedRevenueModel = await RevenueModel.findByPk(req.params.id);
    res.status(200).json(updatedRevenueModel);
  } catch (error) {
    res.status(500).json({ message: "Error updating revenue model", error });
  }
};

// Delete revenue model
export const deleteRevenueModel = async (req, res) => {
  try {
    const deleted = await RevenueModel.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Revenue model not found" });
    res.status(200).json({ message: "Revenue model deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting revenue model", error });
  }
};
