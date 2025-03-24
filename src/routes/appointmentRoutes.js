import express from "express";
import {createAppointment } from "../controllers/appointmentsController.js";  
  

const router = express.Router();

router.post("/create", createAppointment   );


export default router;
