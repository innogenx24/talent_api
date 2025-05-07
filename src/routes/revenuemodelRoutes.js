import express from "express";
import {
  createRevenueModel,
  getAllRevenueModels,
  getRevenueModelById,
  updateRevenueModel,
  deleteRevenueModel,
} from "../controllers/revenueModelController.js";

const router = express.Router();

// Route to create a new revenue model
router.post("/create", createRevenueModel);

// Route to get all revenue models
router.get("/", getAllRevenueModels);

// Route to get a single revenue model by ID
router.get("/:id", getRevenueModelById);

// Route to update a revenue model by ID
router.put("/:id", updateRevenueModel);

// Route to delete a revenue model by ID
router.delete("/:id", deleteRevenueModel);

export default router;
