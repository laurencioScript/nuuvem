import { Router, Request, Response } from 'express';
import userRoutes from './userRoutes';

const router = Router();

router.use('/users', userRoutes);

router.get('/ping', (req: Request, res: Response) => {
    res.send('pong2');
});  

export default router;