import express from "express";
import {
  createLanguageProficiency,
  getAllLanguageProficiencies,
  getLanguageProficiencyById,
  updateLanguageProficiency,
  deleteLanguageProficiency,
} from "../controllers/languageProficiencyController.js";

const router = express.Router();
router.post("/create", createLanguageProficiency);
router.get("/", getAllLanguageProficiencies);
router.get("/:id", getLanguageProficiencyById);
router.put("/:id", updateLanguageProficiency);
router.delete("/:id", deleteLanguageProficiency);

export default router;
