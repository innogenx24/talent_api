import db from "../models/index.js";

const CandidateStatus = db.CandidateStatus;

export const createCandidateStatus = async (req, res) => {
  try {
    const { status, description, active_status } = req.body;

    const newStatus = await CandidateStatus.create({
      status,
      description,
      active_status,
    });

    res.status(201).json(newStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllCandidateStatuses = async (req, res) => {
  try {
    const statuses = await CandidateStatus.findAll();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCandidateStatusById = async (req, res) => {
  try {
    const status = await CandidateStatus.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Candidate status not found" });
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCandidateStatus = async (req, res) => {
  try {
    const { status, description, active_status } = req.body;
    const existingStatus = await CandidateStatus.findByPk(req.params.id);

    if (!existingStatus) return res.status(404).json({ message: "Candidate status not found" });

    await existingStatus.update({
      status,
      description,
      active_status,
    });

    res.status(200).json(existingStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCandidateStatus = async (req, res) => {
  try {
    const status = await CandidateStatus.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Candidate status not found" });

    await status.destroy();
    res.status(200).json({ message: "Candidate status deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
