import express from 'express';
import newsController from '../app/controllers/newsController.js';

const router = express.Router();

router.use('/', newsController.index )

export default router