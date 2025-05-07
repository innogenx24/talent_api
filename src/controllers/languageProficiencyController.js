import db from "../models/index.js";
const LanguageProficiency = db.LanguageProficiency;

// Create new entry
export const createLanguageProficiency = async (req, res) => {
  try {
    const { language, proficiency_level, description, control, active_status } = req.body;

    const newEntry = await LanguageProficiency.create({
      language,
      proficiency_level,
      description,
      control,
      active_status,
    });

    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all entries
export const getAllLanguageProficiencies = async (req, res) => {
  try {
    const data = await LanguageProficiency.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get entry by ID
export const getLanguageProficiencyById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await LanguageProficiency.findByPk(id);
    if (!data) return res.status(404).json({ message: "Not found" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update entry
export const updateLanguageProficiency = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await LanguageProficiency.update(req.body, {
      where: { id },
    });

    if (updated) {
      const updatedEntry = await LanguageProficiency.findByPk(id);
      res.status(200).json(updatedEntry);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete entry
export const deleteLanguageProficiency = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await LanguageProficiency.destroy({
      where: { id },
    });

    if (deleted) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
