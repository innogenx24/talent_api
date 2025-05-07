import db from "../models/index.js";
const WorkLayout = db.WorkLayout;

// Create new WorkLayout
export const createWorkLayout = async (req, res) => {
  try {
    const { work_layout, description, active_status } = req.body;

    const existing = await WorkLayout.findOne({ where: { work_layout } });
    if (existing) {
      return res.status(400).json({ message: "Work layout already exists." });
    }

    const layout = await WorkLayout.create({ work_layout, description, active_status });
    res.status(201).json({ message: "Work layout created successfully", layout });
  } catch (error) {
    res.status(500).json({ message: "Error creating work layout", error });
  }
};

// Get all WorkLayouts
export const getAllWorkLayouts = async (req, res) => {
  try {
    const layouts = await WorkLayout.findAll();
    res.status(200).json(layouts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching work layouts", error });
  }
};

// Get by ID
export const getWorkLayoutById = async (req, res) => {
  try {
    const layout = await WorkLayout.findByPk(req.params.id);
    if (!layout) return res.status(404).json({ message: "Work layout not found" });
    res.status(200).json(layout);
  } catch (error) {
    res.status(500).json({ message: "Error fetching work layout", error });
  }
};

// Update
export const updateWorkLayout = async (req, res) => {
  try {
    const layout = await WorkLayout.findByPk(req.params.id);
    if (!layout) return res.status(404).json({ message: "Work layout not found" });

    const { work_layout, description, active_status } = req.body;
    await layout.update({ work_layout, description, active_status });
    res.status(200).json({ message: "Work layout updated", layout });
  } catch (error) {
    res.status(500).json({ message: "Error updating work layout", error });
  }
};

// Delete
export const deleteWorkLayout = async (req, res) => {
  try {
    const layout = await WorkLayout.findByPk(req.params.id);
    if (!layout) return res.status(404).json({ message: "Work layout not found" });

    await layout.destroy();
    res.status(200).json({ message: "Work layout deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting work layout", error });
  }
};
