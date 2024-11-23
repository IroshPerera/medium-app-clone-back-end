import { Request, Response, NextFunction } from 'express';
import { getLikesByPostId } from '../services/likeService';
import { create } from '../services/likeService';
import { update } from '../services/likeService';

//create like
export const createLike = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const likeDTO = req.body; 
        const newLike = await create(likeDTO);
        res.status(201).json({  data: newLike });
    } catch (error: any) {
        next(error); 
    }
}

//get like by post id
export const getLikeByPostId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const postId = req.params.id;
        const likes = await getLikesByPostId(postId);
        res.status(200).json({ data: likes });
    } catch (error: any) {
        next(error);
    }
}

//unlike post
export const updateLike = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const likeDTO = req.body;
        const updatedLike = await update(likeDTO);
        res.status(200).json({  data: updatedLike });
    } catch (error: any) {
        next(error);
    }
}