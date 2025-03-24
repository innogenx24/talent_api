import express from "express";
import {createImmersiveTechSelection  } from "../controllers/immersiveTechSelections.js";  
  

const router = express.Router();

router.post("/create", createImmersiveTechSelection);


export default router;
