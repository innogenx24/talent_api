import express from "express";
import {
  createBenchStatus,
  getAllBenchStatus,
  getBenchStatusById,
  updateBenchStatus,
  deleteBenchStatus,
} from "../controllers/BenchStatusController.js";  

const router = express.Router();

router.post("/create", createBenchStatus);
router.get("/", getAllBenchStatus);
router.get("/:id", getBenchStatusById);
router.put("/:id", updateBenchStatus);
router.delete("/:id", deleteBenchStatus);

export default router; 
