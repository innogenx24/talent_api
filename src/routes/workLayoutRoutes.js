import express from "express";
import {
  createWorkLayout,
  getAllWorkLayouts,
  getWorkLayoutById,
  updateWorkLayout,
  deleteWorkLayout,
} from "../controllers/workLayoutController.js";

const router = express.Router();

router.post("/create", createWorkLayout);
router.get("/", getAllWorkLayouts);
router.get("/:id", getWorkLayoutById);
router.put("/:id", updateWorkLayout);
router.delete("/:id", deleteWorkLayout);

export default router;
