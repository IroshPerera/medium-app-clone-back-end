import { Router } from 'express';
import { createComment , findCommentByPostId} from '../controllers/commentController';


const router: Router = Router();

router.post('', createComment);
router.get('/:id', findCommentByPostId);


export default router;