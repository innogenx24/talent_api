import express from "express";
import {
    createRateType,
    getAllRateTypes,
    getRateTypeById,
    updateRateType,
    deleteRateType
} from "../controllers/rateType.controller.js";

const router = express.Router();

router.post("/create", createRateType);
router.get("/", getAllRateTypes);
router.get("/:id", getRateTypeById);
router.put("/:id", updateRateType);
router.delete("/:id", deleteRateType);

export default router;
