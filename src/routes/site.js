import express from 'express';
import siteController from '../app/controllers/siteController.js';

const router = express.Router();

router.use('/', siteController.index )

export default router