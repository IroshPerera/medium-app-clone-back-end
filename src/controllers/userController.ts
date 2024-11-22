import { Request, Response, NextFunction } from 'express';
import { signUp, update, findById, findAll,follow ,unfollow} from '../services/userService';

export const signUpUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userDTO = req.body; 
        const newUser = await signUp(userDTO);
        res.status(201).json({ success: true, data: newUser });
    } catch (error: any) {
        next(error); 
    }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userDTO = req.body; 
        const userId = req.params.id;
        const updatedUser = await update(userId, userDTO);
        res.status(200).json({ success: true, data: updatedUser });
    } catch (error: any) {
        next(error); 
    }
};

export const findByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;
        const user = await findById(userId);
        res.status(200).json({ success: true, data: user });
    } catch (error: any) {
        next(error); 
    }
};

export const findAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await findAll();
        res.status(200).json({ success: true, data: users });
    } catch (error: any) {
        next(error); 
    }
};

//follow user
export const followUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;
        const followerId = req.body.followerId;
        const user = await follow(userId, followerId);
        res.status(200).json({ success: true, data: user });
    } catch (error: any) {
        next(error); 
    }
};

//unfollow user
export const unfollowUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;
        const unFollowerId = req.body.unFollowerId;
        const user = await unfollow(userId, unFollowerId);
        res.status(200).json({ success: true, data: user });
    } catch (error: any) {
        next(error); 
    }
};