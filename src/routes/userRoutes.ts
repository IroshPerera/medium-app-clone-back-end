import { Router } from 'express';
import { findAllUsers, findByUserId, signUpUser, updateUser } from '../controllers/userController'; 

const router: Router = Router();

router.post('', signUpUser); 
router.put('/:id', updateUser);
router.get('/:id', findByUserId);
router.get('', findAllUsers);

export default router;
