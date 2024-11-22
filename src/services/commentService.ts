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


        return ({
            id: comment._id,
            comment: comment.comment,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                imageUrl: user.imageUrl
            },
            post: {
                id: post._id,
                title: post.title,
                content: post.content,
                imageUrl: post.imageUrl,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    imageUrl: user.imageUrl
                },
                createdAt: post.createdAt
            },
            createdAt: comment.createdAt
        });

        return comment;
    } catch (error: any) {
        throw new CustomError(error.message, error.statusCode || 500);
    }
}

// find comment by post id
export const findByPostId = async (postId: string) => {
    try {

        // find the post by id
        const post = await Post.findById(postId);
        if(!post) {
            throw new CustomError('Sorry, Unable to find requested post', 404);
        }

        const comments = await Comment.find({ post: postId }).populate('user').populate('post');
        return comments.map(comment => ({
            id: comment._id,
            comment: comment.comment,
            user: {
                id: comment.user._id,
                name: comment.user.name,
                email: comment.user.email,
                imageUrl: comment.user.imageUrl
            },
            post: {
                id: comment.post._id,
                title: comment.post.title,
                content: comment.post.content,
                imageUrl: comment.post.imageUrl,
                user: {
                    id: comment.user._id,
                    name: comment.user.name,
                    email: comment.user.email,
                    imageUrl: comment.user.imageUrl
                },
                createdAt: comment.post.createdAt
            },
            createdAt: comment.createdAt
        }));
    } catch (error: any) {
        throw new CustomError(error.message, error.statusCode || 500);
    }
}