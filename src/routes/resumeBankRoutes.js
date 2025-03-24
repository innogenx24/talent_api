import express from "express";
import {
    createResumeEntry ,
    getAllResumes ,
    getResumeById ,
    updateResumeEntry ,
    deleteResumeEntry ,
  } from "../controllers/resumeBankController.js";  
  
import authMiddleware from "../middlewares/authMiddleware.js";

import upload from "../middlewares/multer.js"

const router = express.Router();

router.post("/create",upload.single('resume_file'), createResumeEntry );
router.get("/",authMiddleware, getAllResumes );
router.get("/:id", getResumeById );
router.put("/:id", updateResumeEntry );
router.delete("/:id", deleteResumeEntry );

export default router;
