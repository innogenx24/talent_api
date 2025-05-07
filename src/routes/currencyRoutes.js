import express from "express";
import {
  createCurrency,
  getAllCurrencies,
  getCurrencyById,
  updateCurrency,
  deleteCurrency,
} from "../controllers/currencyController.js";

const router = express.Router();

router.post("/create", createCurrency);
router.get("/", getAllCurrencies);
router.get("/:id", getCurrencyById);
router.put("/:id", updateCurrency);
router.delete("/:id", deleteCurrency);

export default router;
