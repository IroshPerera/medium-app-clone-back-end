import { CreateCommentDTO } from "dto/comment/CommentDTO";
import Comment from "../models/Commnet";
import Post from "../models/Post";
import User from "../models/User";
import { CustomError } from "../utils/CustomError";

// create a comment
export const create = async (commentDTO: CreateCommentDTO)=> {
    
    //find the post by id
    try {
        const post = await Post.findById(commentDTO.postId);
        if(!post) {
            throw new CustomError('Sorry, Unable to find requested post', 404);
        }

        // find user by id
        const user = await User.findById(commentDTO.userId);
        if(!user) {
            throw new CustomError('Sorry, Unable to find requested user', 404);
        }

        const comment = new Comment({
            content: commentDTO.comment,
            post: post._id,
            user: user._id,
        });

        await comment.save();

        return comment;
    } catch (error: any) {
        throw new CustomError(error.message, error.statusCode || 500);
    }
}