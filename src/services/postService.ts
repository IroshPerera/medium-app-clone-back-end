import { CreatePostDTO, ResponsePostDTO, UpdatePostDTO } from "dto/post/PostDTO";
import { ResponseUserDTO } from "dto/user/UserDTO";
import Post from "../models/Post";
import User from "../models/User";
import { CustomError } from "../utils/CustomError";
import { response } from "express";

export const create = async (postDTO: CreatePostDTO) => {
    try {

        const user = await User.findById(postDTO.userId);

        if (!user) {
            throw new CustomError('Sorry, Unable to find requested user', 404);
        }

        const post = new Post({
            title: postDTO.title,
            content: postDTO.content,
            imageUrl: postDTO.imageUrl,
            user: user._id,
        });

        await post.save();

        return post;
    } catch (error: any) {

        throw new CustomError(error.message, error.statusCode || 500);
    }
}

//find post by user id
export const findPostByUserId = async (userId: string) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw new CustomError('Sorry, Unable to find requested user', 404);
        }

        const posts = await Post.find({ user: userId });

        return posts;
    } catch (error: any) {
        throw new CustomError(error.message, error.statusCode || 500);
    }
}

// find all posts
export const findAll = async () => {
    try {
        const posts = await Post.find();

        let responsePosts: ResponsePostDTO[] = [];

        for (let post of posts) {
            const user = await User.findById(post.user); // assuming post.user is the user ID

          

            responsePosts.push({
                title: post.title,
                content: post.content,
                imageUrl: post.imageUrl,
                user: {  // Correct assignment here
                    name: user?.name,
                    email: user?.email,
                    imageUrl: user?.imageUrl,
                },
                createdAt: post.createdAt, // assuming post has createdAt field
            });
        }

        return responsePosts; // Return the result after the loop

    } catch (error: any) {
        throw new CustomError(error.message, error.statusCode || 500);
    }
};

//update post
export const update = async (postId: string, postDTO: UpdatePostDTO) => {
    try {
        const post = await Post.findById(postId);

        if (!post) {
            throw new CustomError('Sorry, Unable to find requested post', 404);
        }

        // chek if the user is the owner of the post
        if (post.user.toString() !== postDTO.userId) {
            throw new CustomError('Sorry, You are not allowed to update this post', 403);
        }

        post.title = postDTO.title;
        post.content = postDTO.content;
        post.imageUrl = postDTO.imageUrl;

        await post.save();

        return post;
    } catch (error: any) {
        throw new CustomError(error.message, error.statusCode || 500);
    }
}