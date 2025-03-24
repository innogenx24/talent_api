import express from "express";
import {
    createCandidate  ,
    getAllCandidates  ,
    getCandidateById  ,
    updateCandidate ,
    deleteCandidate  ,
  } from "../controllers/candidateDetailsController.js";  
  
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", createCandidate  );
router.get("/",authMiddleware, getAllCandidates  );
router.get("/:id", getCandidateById  );
router.put("/:id", updateCandidate );
router.delete("/:id", deleteCandidate  );

export default router;
