import db from "../models/index.js";

const AvailabilityStatus = db.AvailabilityStatus;

// Create a new availability status
export const createAvailabilityStatus = async (req, res) => {
  try {
    const { availability_status, description, active_status } = req.body;

    if (!availability_status || active_status === undefined) {
      return res.status(400).json({ message: "Required fields are missing." });
    }

    const newStatus = await AvailabilityStatus.create({
      availability_status,
      description,
      active_status,
    });

    res.status(201).json(newStatus);
  } catch (error) {
    res.status(500).json({ message: "Error creating availability status.", error });
  }
};

// Get all availability statuses
export const getAllAvailabilityStatuses = async (req, res) => {
  try {
    const statuses = await AvailabilityStatus.findAll();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching availability statuses.", error });
  }
};

// Get a single availability status by ID
export const getAvailabilityStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    const status = await AvailabilityStatus.findByPk(id);

    if (!status) {
      return res.status(404).json({ message: "Availability status not found." });
    }

    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ message: "Error fetching availability status.", error });
  }
};

// Update an availability status
export const updateAvailabilityStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { availability_status, description, active_status } = req.body;

    const status = await AvailabilityStatus.findByPk(id);
    if (!status) {
      return res.status(404).json({ message: "Availability status not found." });
    }

    await status.update({
      availability_status,
      description,
      active_status,
    });

    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ message: "Error updating availability status.", error });
  }
};

// Delete an availability status
export const deleteAvailabilityStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const status = await AvailabilityStatus.findByPk(id);

    if (!status) {
      return res.status(404).json({ message: "Availability status not found." });
    }

    await status.destroy();
    res.status(200).json({ message: "Availability status deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting availability status.", error });
  }
};
