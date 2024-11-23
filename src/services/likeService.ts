import { CreateLikeDTO } from "dto/like/LIkeDTO";
import Like from "../models/Like";
import Post from "../models/Post";
import User from "../models/User";
import { CustomError } from "../utils/CustomError";

// create like
export const create = async (likeDTO: CreateLikeDTO) => {
    try {
        const user = await User.findById(likeDTO.userId);

        if (!user) {
            throw new CustomError('Sorry, Unable to find requested user', 404);
        }

        const post = await Post.findById(likeDTO.postId);

        if (!post) {
            throw new CustomError('Sorry, Unable to find requested post', 404);
        }

        //find if user has already liked the post
        const existingLike = await Like.findOne({ post: post._id, user: user._id });

        if (existingLike) {
            throw new CustomError('Sorry, User has already liked this post', 400);
        }

        const like = new Like({
            post: post._id,
            user: user._id,
        });

        await like.save();

        return like;
    
    } catch (error: any) {
        throw error;
    }
}

// get like by post id
export const getLikesByPostId = async (postId: string) => {
    try {
        const post = await Post.findById(postId);

        if (!post) {
            throw new CustomError('Sorry, Unable to find requested post', 404);
        }

        const likes = await Like.find({ post: postId });

        return likes;
    } catch (error: any) {
        throw error;
    }
}

// update like
export const update = async (likeDTO: CreateLikeDTO) => {
    try {
        const user = await User.findById(likeDTO.userId);

        if (!user) {
            throw new CustomError('Sorry, Unable to find requested user', 404);
        }

        const post = await Post.findById(likeDTO.postId);

        if (!post) {
            throw new CustomError('Sorry, Unable to find requested post', 404);
        }

        const like = await Like.findOne({ post: post._id, user: user._id });

        if (!like) {
            throw new CustomError('Sorry, Unable to find requested like', 404);
        }

        await Like.findByIdAndDelete(like._id);

        return like;
    } catch (error: any) {
        throw error;
    }
}