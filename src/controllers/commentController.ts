import { Request, Response, NextFunction } from 'express';
import { create,findByPostId } from '../services/commentService';

//createComment function
export const createComment = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const commentDTO = req.body; 
        const newComment = await create(commentDTO);
        res.status(201).json({ data: newComment });

    } catch (error: any) {
        next(error); 
    }

}

//find Comment By post Id
export const findCommentByPostId = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const postId = req.params.id;
        const comments = await findByPostId(postId);
        res.status(200).json({ data: comments });
    } catch (error: any) {
        next(error);
    }
} 