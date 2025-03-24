import express from "express";
import {createUserProfile} from "../controllers/userProfilesController.js";  
  

const router = express.Router();

router.post("/create", createUserProfile  );


export default router;