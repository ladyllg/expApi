import { Router } from 'express';
import pingRouter from '../resources/ping/ping.router';

const router = Router();

router.use('/ping', pingRouter);

export default router;
