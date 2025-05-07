import express from 'express';
import { 
    createOverallStatus, 
    getAllOverallStatuses, 
    getOverallStatusById, 
    updateOverallStatus, 
    deleteOverallStatus 
} from '../controllers/OverallStatusController.js';

const router = express.Router();

router.post('/create', createOverallStatus);
router.get('/', getAllOverallStatuses);
router.get('/:id', getOverallStatusById);
router.put('/:id', updateOverallStatus);
router.delete('/:id', deleteOverallStatus);

export default router;
