import { Router } from 'express';
import healthRouter from './health-check';

const router: Router = Router();

router.use('/', healthRouter);

export default router;
