import express from 'express';
import { 
  createInterviewStatus, 
  getAllInterviewStatuses, 
  getInterviewStatusById, 
  updateInterviewStatus, 
  deleteInterviewStatus 
} from '../controllers/interviewStatusController.js';

const router = express.Router();

router.post('/create', createInterviewStatus);
router.get('/', getAllInterviewStatuses);
router.get('/:id', getInterviewStatusById);
router.put('/:id', updateInterviewStatus);
router.delete('/:id', deleteInterviewStatus);

export default router;
