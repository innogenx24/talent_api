import express from "express";
import {
  createAvailabilityStatus,
  getAllAvailabilityStatuses,
  getAvailabilityStatusById,
  updateAvailabilityStatus,
  deleteAvailabilityStatus,
} from "../controllers/availabilityStatus.controller.js";

const router = express.Router();

router.post("/create", createAvailabilityStatus);
router.get("/", getAllAvailabilityStatuses);
router.get("/:id", getAvailabilityStatusById);
router.put("/:id", updateAvailabilityStatus);
router.delete("/:id", deleteAvailabilityStatus);

export default router;
