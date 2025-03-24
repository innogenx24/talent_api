import express from "express";
import {
    createClientContact  ,
    getAllClientContacts ,
    getClientContactById  ,
    updateClientContact ,
    deleteClientContact  ,
  } from "../controllers/clientContactDetailsController.js";  
  
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", createClientContact  );
router.get("/",authMiddleware, getAllClientContacts );
router.get("/:id", getClientContactById  );
router.put("/:id", updateClientContact );
router.delete("/:id", deleteClientContact  );

export default router;
