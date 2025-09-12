import { Router } from 'express';
import healthRouter from './health-check';
import simpleAuthRouter from './simple-auth';

const router: Router = Router();

router.use('/api', healthRouter);
router.use('/api', simpleAuthRouter);

export default router;
