import express from "express";
import {
  createCandidateStatus,
  getAllCandidateStatuses,
  getCandidateStatusById,
  updateCandidateStatus,
  deleteCandidateStatus,
} from "../controllers/CandidateStatusController.js";

const router = express.Router();

router.post("/create", createCandidateStatus);
router.get("/", getAllCandidateStatuses);
router.get("/:id", getCandidateStatusById);
router.put("/:id", updateCandidateStatus);
router.delete("/:id", deleteCandidateStatus);

export default router;
