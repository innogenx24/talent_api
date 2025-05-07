import express from 'express';
import {
  createOffBoardingReason,
  getAllOffBoardingReasons,
  getOffBoardingReasonById,
  updateOffBoardingReason,
  deleteOffBoardingReason,
} from '../controllers/OffBoardingReasonController.js';

const router = express.Router();

router.post('/create', createOffBoardingReason);
router.get('/', getAllOffBoardingReasons);
router.get('/:id', getOffBoardingReasonById);
router.put('/:id', updateOffBoardingReason);
router.delete('/:id', deleteOffBoardingReason);

export default router;
