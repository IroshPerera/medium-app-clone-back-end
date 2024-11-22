import { Router } from 'express';
import { findAllUsers, findByUserId, signUpUser, updateUser,followUser,unfollowUser } from '../controllers/userController'; 

const router: Router = Router();

router.post('', signUpUser); 
router.put('/:id', updateUser);
router.get('/:id', findByUserId);
router.get('', findAllUsers);
router.patch('/follow/:id', followUser);
router.patch('/unfollow/:id', unfollowUser);

export default router;
