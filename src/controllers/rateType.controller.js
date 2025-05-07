import db from "../models/index.js";
const RateType = db.RateType;

// Create new RateType
export const createRateType = async (req, res) => {
    try {
        const { rate_type, description, active_status } = req.body;
        const newRateType = await RateType.create({
            rate_type,
            description,
            active_status
        });
        res.status(201).json(newRateType);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all RateTypes
export const getAllRateTypes = async (req, res) => {
    try {
        const rateTypes = await RateType.findAll();
        res.status(200).json(rateTypes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get RateType by ID
export const getRateTypeById = async (req, res) => {
    try {
        const rateType = await RateType.findByPk(req.params.id);
        if (!rateType) {
            return res.status(404).json({ message: "RateType not found" });
        }
        res.status(200).json(rateType);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update RateType
export const updateRateType = async (req, res) => {
    try {
        const { rate_type, description, active_status } = req.body;
        const rateType = await RateType.findByPk(req.params.id);

        if (!rateType) {
            return res.status(404).json({ message: "RateType not found" });
        }

        rateType.rate_type = rate_type;
        rateType.description = description;
        rateType.active_status = active_status;
        await rateType.save();

        res.status(200).json(rateType);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete RateType
export const deleteRateType = async (req, res) => {
    try {
        const rateType = await RateType.findByPk(req.params.id);
        if (!rateType) {
            return res.status(404).json({ message: "RateType not found" });
        }

        await rateType.destroy();
        res.status(200).json({ message: "RateType deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
