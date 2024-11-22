import { Router } from 'express';
import { createComment } from '../controllers/commentController';


const router: Router = Router();

router.post('', createComment);


export default router;