import express from "express";
import {
  createIndustry,
  getAllIndustries,
  getIndustryById,
  updateIndustry,
  deleteIndustry
} from "../controllers/industry.controller.js";

const router = express.Router();

router.post("/create", createIndustry);
router.get("/", getAllIndustries);
router.get("/:id", getIndustryById);
router.put("/:id", updateIndustry);
router.delete("/:id", deleteIndustry);

export default router;
