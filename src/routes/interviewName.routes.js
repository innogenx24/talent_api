import express from "express";
import {
    createInterviewName,
    getAllInterviewNames,
    getInterviewNameById,
    updateInterviewName,
    deleteInterviewName
} from "../controllers/interviewName.controller.js";

const router = express.Router();

// Create a new interview name
router.post("/create", createInterviewName);

// Get all interview names
router.get("/", getAllInterviewNames);

// Get interview name by ID
router.get("/:id", getInterviewNameById);

// Update interview name by ID
router.put("/:id", updateInterviewName);

// Delete interview name by ID
router.delete("/:id", deleteInterviewName);

export default router;
