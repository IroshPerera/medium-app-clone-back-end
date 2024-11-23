import { Router } from 'express';
import { createLike,getLikeByPostId ,updateLike} from '../controllers/likeController';

const router: Router = Router();

router.post('', createLike);
router.get('/:id', getLikeByPostId);
router.put('/unLike', updateLike);

export default router;

