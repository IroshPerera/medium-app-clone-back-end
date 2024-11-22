import { Request, Response, NextFunction } from 'express';
import { create } from '../services/commentService';

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