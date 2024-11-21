import { update } from 'services/userService';
import { createPost, findAllPosts, findMyPost,updatePost } from '../controllers/postController';
import { Router } from 'express';

const router: Router = Router();

router.post('', createPost); 
router.get('/:id', findMyPost);
router.get('', findAllPosts);
router.put('/:id', updatePost);



export default router;