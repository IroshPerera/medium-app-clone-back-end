import { Request, Response, NextFunction } from 'express';
import { create,findPostByUserId,findAll,update } from '../services/postService';

export const createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const postDTO = req.body; 
        const newPost = await create(postDTO);
        res.status(201).json({ success: true, data: newPost });
    } catch (error: any) {
        next(error); 
    }
}

//find my posts by user id
export const findMyPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const postId = req.params.id;
        const post = await findPostByUserId(postId);
        res.status(200).json({data: post });
    } catch (error: any) {
        next(error);
    }
}

//find all posts
export const findAllPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await findAll();
        res.status(200).json({ data: posts });
    } catch (error: any) {
        next(error);
    }
}

//update post
export const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const postId = req.params.id;
        const postDTO = req.body;
        const updatedPost = await update(postId, postDTO);
        res.status(200).json({data: updatedPost });
    } catch (error: any) {
        next(error);
    }
}