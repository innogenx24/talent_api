import db from "../models/index.js";

const Source = db.Source;

// Create a new Source
export const createSource = async (req, res) => {
  try {
    const source = await Source.create(req.body);
    res.status(201).json(source);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Sources
export const getAllSources = async (req, res) => {
  try {
    const sources = await Source.findAll();
    res.status(200).json(sources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Source by ID
export const getSourceById = async (req, res) => {
  try {
    const source = await Source.findByPk(req.params.id);
    if (!source) return res.status(404).json({ error: "Source not found" });
    res.status(200).json(source);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Source
export const updateSource = async (req, res) => {
  try {
    const [updated] = await Source.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updated) return res.status(404).json({ error: "Source not found" });

    const updatedSource = await Source.findByPk(req.params.id);
    res.status(200).json(updatedSource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a Source
export const deleteSource = async (req, res) => {
  try {
    const deleted = await Source.destroy({ where: { id: req.params.id } });

    if (!deleted) return res.status(404).json({ error: "Source not found" });

    res.status(200).json({ message: "Source deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
