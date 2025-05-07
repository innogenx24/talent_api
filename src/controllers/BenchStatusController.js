import db from "../models/index.js";

const BenchStatus = db.BenchStatus;

// Create
export const createBenchStatus = async (req, res) => {
  try {
    const { employee_name, status, description, active_status } = req.body;

    if (!employee_name || !status) {
      return res.status(400).json({ message: "Employee name and status are required" });
    }

    const newStatus = await BenchStatus.create({
      employee_name,
      status,
      description,
      active_status,
    });

    res.status(201).json(newStatus);
  } catch (err) {
    console.error("Create error:", err);
    res.status(500).json({ message: "Failed to create bench status" });
  }
};

// Read all
export const getAllBenchStatus = async (req, res) => {
  try {
    const statuses = await BenchStatus.findAll();
    res.status(200).json(statuses);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ message: "Failed to fetch bench statuses" });
  }
};

// Read by ID
export const getBenchStatusById = async (req, res) => {
  try {
    const id = req.params.id;
    const status = await BenchStatus.findByPk(id);

    if (!status) {
      return res.status(404).json({ message: "Status not found" });
    }

    res.status(200).json(status);
  } catch (err) {
    console.error("Get by ID error:", err);
    res.status(500).json({ message: "Failed to get bench status" });
  }
};

// Update
export const updateBenchStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const { employee_name, status, description, active_status } = req.body;

    const benchStatus = await BenchStatus.findByPk(id);
    if (!benchStatus) {
      return res.status(404).json({ message: "Status not found" });
    }

    await benchStatus.update({ employee_name, status, description, active_status });
    res.status(200).json({ message: "Bench status updated successfully" });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Failed to update bench status" });
  }
};

// Delete
export const deleteBenchStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await BenchStatus.destroy({ where: { id } });

    if (result === 0) {
      return res.status(404).json({ message: "Status not found" });
    }

    res.status(200).json({ message: "Bench status deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Failed to delete bench status" });
  }
};
