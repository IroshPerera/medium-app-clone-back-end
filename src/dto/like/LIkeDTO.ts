import { ResponsePostDTO } from "dto/post/PostDTO";
import { ResponseUserDTO } from "dto/user/UserDTO";

export interface CreateLikeDTO {
    postId: string;
    userId: string;
}

export interface ResponseLikeDTO {
    id: string;
    post: ResponsePostDTO;
    user: ResponseUserDTO;
    createdAt: Date;
}

export interface UpdateLikeDTO {
    postId: string;
    userId: string;
}

