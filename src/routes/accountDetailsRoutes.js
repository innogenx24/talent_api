import express from "express";
import {
  createAccountDetail,
  getAllAccountDetails,
  getAccountDetailById,
  updateAccountDetail,
  deleteAccountDetail,
} from "../controllers/accountDetailsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", createAccountDetail);
router.get("/",authMiddleware, getAllAccountDetails);
router.get("/:id", getAccountDetailById);
router.put("/:id", updateAccountDetail);
router.delete("/:id", deleteAccountDetail);

export default router;
