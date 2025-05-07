import express from "express";
import {
  createSource,
  getAllSources,
  getSourceById,
  updateSource,
  deleteSource,
} from "../controllers/sourceController.js";

const router = express.Router();

// Create Source (using '/create' explicitly)
router.post("/create", createSource);

// Other routes
router.get("/", getAllSources);
router.get("/:id", getSourceById);
router.put("/:id", updateSource);
router.delete("/:id", deleteSource);

export default router;
