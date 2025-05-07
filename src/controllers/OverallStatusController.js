import db from '../models/index.js';

const OverallStatus = db.OverallStatus;

// Create a new overall status
export const createOverallStatus = async (req, res) => {
  try {
    const { overall_status, description, active_status } = req.body;

    const status = await OverallStatus.create({
      overall_status,
      description,
      active_status,
    });

    res.status(201).json({ message: "Overall status created successfully", status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating overall status", error });
  }
};

// Get all overall statuses
export const getAllOverallStatuses = async (req, res) => {
  try {
    const statuses = await OverallStatus.findAll();
    res.status(200).json(statuses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching overall statuses", error });
  }
};

// Get overall status by ID
export const getOverallStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    const status = await OverallStatus.findByPk(id);

    if (!status) return res.status(404).json({ message: "Overall status not found" });

    res.status(200).json(status);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching overall status", error });
  }
};

// Update overall status
export const updateOverallStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { overall_status, description, active_status } = req.body;

    const status = await OverallStatus.findByPk(id);

    if (!status) return res.status(404).json({ message: "Overall status not found" });

    await status.update({
      overall_status,
      description,
      active_status,
    });

    res.status(200).json({ message: "Overall status updated successfully", status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating overall status", error });
  }
};

// Delete overall status
export const deleteOverallStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const status = await OverallStatus.findByPk(id);

    if (!status) return res.status(404).json({ message: "Overall status not found" });

    await status.destroy();

    res.status(200).json({ message: "Overall status deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting overall status", error });
  }
};
